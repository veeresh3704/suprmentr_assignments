// Root folder
let fileSystem = {
  name: "root",
  type: "folder",
  children: [],
};

// ➕ Add file
function addFile(folder, fileName) {
  folder.children.push({
    name: fileName,
    type: "file",
  });
}

// 📁 Add folder
function addFolder(folder, folderName) {
  const newFolder = {
    name: folderName,
    type: "folder",
    children: [],
  };
  folder.children.push(newFolder);
  return newFolder;
}

// 🌳 Print folder structure
function printStructure(folder, indent = "") {
  console.log(indent + "📁 " + folder.name);

  folder.children.forEach((item) => {
    if (item.type === "file") {
      console.log(indent + "  📄 " + item.name);
    } else {
      printStructure(item, indent + "  ");
    }
  });
}

// 🔍 Search file
function searchFile(folder, fileName) {
  for (let item of folder.children) {
    if (item.type === "file" && item.name === fileName) {
      console.log("✅ File found:", fileName);
      return true;
    } else if (item.type === "folder") {
      if (searchFile(item, fileName)) {
        return true;
      }
    }
  }
  return false;
}

// ❌ Delete file
function deleteFile(folder, fileName) {
  folder.children = folder.children.filter((item) => {
    if (item.type === "file" && item.name === fileName) {
      console.log("🗑️ Deleted:", fileName);
      return false;
    }
    return true;
  });

  folder.children.forEach((item) => {
    if (item.type === "folder") {
      deleteFile(item, fileName);
    }
  });
}

//////////////////////////////////////////////////////
// 🚀 TESTING

let docs = addFolder(fileSystem, "Documents");
addFile(docs, "resume.pdf");
addFile(docs, "notes.txt");

// Print structure
console.log("\n📂 Initial Structure:");
printStructure(fileSystem);

// Search
console.log("\n🔍 Searching:");
searchFile(fileSystem, "resume.pdf");
searchFile(fileSystem, "abc.txt");

// Delete
console.log("\n❌ Deleting notes.txt:");
deleteFile(fileSystem, "notes.txt");

// Print again
console.log("\n📂 After Deletion:");
printStructure(fileSystem);