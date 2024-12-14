<template>
  <div class="sidebar">
    <div class="header">
      <h3>Danh mục</h3>
    </div>
    <div class="actions">
      <button class="btn btn-primary" @click="createCategory">+ Tạo mới mục</button>
      <button class="btn btn-primary" @click="createDocument">+ Tạo mới con</button>
      <button class="btn btn-warning" @click="editCategory">Sửa</button>
      <button class="btn btn-danger" @click="deleteCategory">Xóa</button>
    </div>
    <ul class="tree">
      <li>
        <span class="folder">
          <font-awesome-icon :icon="['fas', 'folder']" class="icon" /> Ma túy
        </span>
        <ul>
          <li>
            <span class="folder">
              <font-awesome-icon :icon="['fas', 'folder']" class="icon" /> Các loại ma túy khác
            </span>
          </li>
          <li>
            <span class="folder">
              <font-awesome-icon :icon="['fas', 'folder']" class="icon" /> Ma túy tổng hợp
            </span>
            <ul>
              <li>
                <span class="file">
                  <font-awesome-icon :icon="['fas', 'folder']" class="icon" /> Cần sa tổng hợp
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <span class="folder">
          <font-awesome-icon :icon="['fas', 'folder']" class="icon" /> Không phải ma túy
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      createCategory() {
        alert("Tạo mới mục!");
      },
      createDocument() {
        alert("Tạo mới con!");
      },
      editCategory() {
        alert("Sửa mục!");
      },
      deleteCategory() {
        alert("Xóa mục!");
      },
    },
  };
</script>

<style scoped>
  .sidebar {
    border: 1px solid #ddd;
    padding: 10px;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    width: 400px; 
    max-height: 250px; 
    overflow-y: auto; 
  }

  .header h3 {
    margin: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    font-size: 18px;
    color: #333;
  }

  .actions {
    margin: 10px 0;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  button {
    padding: 5px 10px;
    font-size: 14px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  .btn-primary {
    background-color: #007bff;
    color: #fff;
  }

  .btn-warning {
    background-color: #ffc107;
    color: #fff;
  }

  .btn-danger {
    background-color: #dc3545;
    color: #fff;
  }

  .tree {
    margin: 10px 0;
    padding-left: 20px;
    list-style-type: none;
  }

  .tree li {
    margin: 5px 0;
    position: relative;
  }

  .icon {
    width: 16px;
    height: 16px;
    margin-right: 5px;
    vertical-align: middle;
  }

  .tree li::before {
    content: '';
    position: absolute;
    top: 10px;
    left: -10px;
    width: 10px;
    height: 1px;
    background-color: #ccc;
  }

  .tree li::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 1px;
    height: 20px;
    background-color: #ccc;
  }

  .tree .folder {
    font-weight: bold;
    cursor: pointer;
  }

  .tree .file {
    margin-left: 20px;
    color: #555;
  }
</style>
