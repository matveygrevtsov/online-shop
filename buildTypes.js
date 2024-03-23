const { exec } = require("child_process");
const fs = require("fs");

const HOST = "online-shop-main";

const TYPE_FOLDER_NAMES = ["__mocks__", "@mf-types"]; // Названия папок, куда должны заливаться сбилженные типы.
const MAX_TYPES_CREATION_TIME_SECONDS = 60; // Насколько долго мы готовы ждать, пока сбилдятся типы.
const CHECK_TYPES_INTERVAL_MILLISECONDS = 1000; // Как часто мы будет проверять типы на готовность.
const REMOVE_OLD_TYPES = true;

const maxTypesCreationTimeMilliseconds = MAX_TYPES_CREATION_TIME_SECONDS * 1000;

const areTypesReady = () => {
  const fileNames = fs.readdirSync(HOST);
  return TYPE_FOLDER_NAMES.every((typeFolderName) =>
    fileNames.includes(typeFolderName)
  );
};

const handleTypesReady = () => {
  console.log("Типы готовы !");
  process.exit(0);
};

const checkTypesReady = () => {
  console.log("Проверяем, готовы ли новые типы...");
  if (areTypesReady()) {
    handleTypesReady();
  }
};

if (areTypesReady()) {
  if (REMOVE_OLD_TYPES) {
    console.log("Удаляем старые типы ...");
    TYPE_FOLDER_NAMES.forEach((typeFolderName) => {
      fs.rmSync(`${HOST}/${typeFolderName}`, { recursive: true, force: true });
    });
    console.log("Старые типы успешно удалены!");
  } else {
    handleTypesReady();
  }
}

setInterval(checkTypesReady, CHECK_TYPES_INTERVAL_MILLISECONDS);

setTimeout(() => {
  console.error("Превышено время ожидания создания типов :(");
  process.exit(1);
}, maxTypesCreationTimeMilliseconds);

exec(`npm start`, (error) => {
  console.error(
    "Не удалось запустить сервера, чтобы сбилдить типы. Повторите попытку."
  );
  console.error(error);
});
