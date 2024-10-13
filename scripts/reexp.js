const { execSync } = require("child_process")
const path = require("path")

// Получаем аргумент из командной строки (вложенные папки)
const relativeDir = process.argv[2] // Второй элемент массива argv
const currentDir = process.cwd()

// Создаем полный путь к директории
const sourcePath = path.join(currentDir, "src/app", relativeDir)

// Выполняем команду
execSync(`re-exp -e ts -d ${sourcePath}`, { stdio: "inherit" })
