<template>
  <div class="container">
    <!-- Phần header -->
    <div class="header">
      <span class="title">Thư viện chất chuẩn</span>
      <button class="add-button" @click="showAddForm = true">+ Thêm mẫu mới</button>
    </div>
    <hr class="divider" />

    <!-- Form thêm mẫu mới dưới dạng pop-up -->
    <div v-if="showAddForm" class="modal-overlay">
      <div class="modal">
      <!-- Header with title and horizontal line -->
        <div class="modal-header">
          <h2>Thêm Bản Ghi Mới</h2>
          <hr class="modal-header-line" />
        </div>

      <!-- Form content -->
      <form @submit.prevent="addNewSample">
        <table border="1" style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr>
            <th>Thời gian lưu (phút)</th>
            <th>Mã số cơ bản MS</th>  
          </tr>
        </thead>
        <tbody>
          <tr>
            <!-- Thời gian lưu (ô input đầu tiên) -->
            <td style="text-align: center;">
              <input type="number" v-model.number="newSample.time" required style="width: 80%;"/>
            </td>
            <!-- Mã số cơ bản MS (7 ô input ngang) -->
            <td>
              <div style="display: flex; justify-content: space-between; gap: 10px; padding: 10px;">
                <input v-model="newSample.code1" required placeholder="MS 1" />
                <input v-model="newSample.code2" required placeholder="MS 2" />
                <input v-model="newSample.code3" required placeholder="MS 3" />
                <input v-model="newSample.code4" required placeholder="MS 4" />
                <input v-model="newSample.code5" required placeholder="MS 5" />
                <input v-model="newSample.code6" required placeholder="MS 6" />
                <input v-model="newSample.code7" required placeholder="MS 7" />
                <input v-model="newSample.code7" required placeholder="MS 8" />
                <input v-model="newSample.code7" required placeholder="MS 9" />
                <input v-model="newSample.code7" required placeholder="MS 10" />
              </div>
            </td>
          </tr>
        </tbody>
        </table>
        <div style="margin-top: 15px; display: flex; align-items: center;">
          <label for="drugInput" style="margin-right: 20px; font-weight: bold;">Chất ma túy:</label>
           <input id="drugInput" v-model="newSample.drug" placeholder="Nhập thông tin" style="padding: 5px; width: 300px;" />
        </div>
      <div>
       <label for="drugInput" style="margin-right: 20px; font-weight: bold;">Chọn thuộc danh mục:</label>

        <ul class="tree horizontal-list">
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
      <div style="margin-top: 10px; " class="modal-buttons">
        <button type="submit" class="save-button">Lưu</button>
        <button type="button" class="cancel-button" @click="showAddForm = false">Hủy</button>
       </div>
    </form>
  </div>
</div>


    <div class="record-selector">
      <label for="records-per-page">Hiển thị số bản ghi: </label>
      <select id="records-per-page" v-model.number="itemsPerPage" @change="updatePage">
        <option v-for="option in recordOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>

    <table class="data-table">
      <colgroup>
        <col style="width: 200px" />
        <col style="width: 150px" />
        <col style="width: 200px" />
        <col style="width: 180px" />
        <col style="width: 180px" />
        <col style="width: 150px" />
      </colgroup>
      <thead>
        <tr>
          <th>Chất ma túy</th>
          <th>Thời gian lưu</th>
          <th>Mã số cơ bản MS</th>
          <th>Thuộc danh mục</th>
          <th>Người</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in displayedSamples" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.time }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.user }}</td>
          <td>
            <button class="edit-button" @click="editSample(item.id)">Sửa</button>
            <button class="delete-button" @click="deleteSample(item.id)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Thanh phân trang -->
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="currentPage--">Trang trước</button>
      <button
        v-for="page in totalPages"
        :key="page"
        :class="{ active: currentPage === page }"
        @click="currentPage = page"
      >
        {{ page }}
      </button>
      <button :disabled="currentPage === totalPages" @click="currentPage++">Trang sau</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      samples: [
        { id: 1, name: "MDMA", time: 0, code: "MS001", category: "root", user: "Trần Biên" },
        { id: 2, name: "Fentanyl", time: 0, code: "MS002", category: "root", user: "Trần Biên" },
        { id: 3, name: "Ketamine", time: 0, code: "MS003", category: "root", user: "Lê Minh Đông" },
        { id: 4, name: "Caffeine", time: 0, code: "MS004", category: "Không phải ma túy", user: "Lê Minh Đông" },
        { id: 5, name: "MDMA", time: 0, code: "MS005", category: "root", user: "Nguyễn Văn A" },
        { id: 6, name: "Fentanyl", time: 0, code: "MS006", category: "root", user: "Nguyễn Văn B" },
        { id: 7, name: "Ketamine", time: 0, code: "MS007", category: "root", user: "Lê Minh Đông" },
        { id: 8, name: "Caffeine", time: 0, code: "MS008", category: "Không phải ma túy", user: "Lê Minh Đông" },
      ],
      currentPage: 1,
      itemsPerPage: 10,
      recordOptions: [5, 10, 15, 20],
      showAddForm: false,
      newSample: {
        name: "",
        time: 0,
        code: "",
        category: "",
        user: "",
      },
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.samples.length / this.itemsPerPage);
    },
    displayedSamples() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.samples.slice(start, end);
    },
  },
  methods: {
    addNewSample() {
      this.samples.push({
        id: Date.now(),
        name: this.newSample.name,
        time: this.newSample.time,
        code: this.newSample.code,
        category: this.newSample.category,
        user: this.newSample.user,
      });
      this.showAddForm = false;
      this.newSample = { name: "", time: 0, code: "", category: "", user: "" };
    },
    editSample(id) {
      alert(`Sửa mẫu có ID: ${id}`);
    },
    deleteSample(id) {
      this.samples = this.samples.filter((item) => item.id !== id);
    },
    updatePage() {
      this.currentPage = 1;
    },
  },
};
</script>

<style scoped>
/* Khung xung quanh toàn bộ nội dung */
.container {
  width: 70%;
  max-width: 1200px;
  height: 70vh; /* Chiếm 80% chiều cao màn hình */
  margin: 0 auto; /* Căn giữa ngang */
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: auto; /* Cuộn nội dung nếu vượt quá chiều cao */
}

/* Giao diện header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

/* Đường phân chia */
.divider {
  border: none;
  border-bottom: 2px solid #ddd;
  margin: 10px 0;
}

/* Phần chọn số bản ghi hiển thị */
.record-selector {
  margin-bottom: 15px;
}
.record-selector label {
  font-size: 14px;
  margin-right: 5px;
}
.record-selector select {
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Nút thêm mẫu */
.add-button {
  padding: 8px 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.add-button:hover {
  background-color: #218838;
}

/* Bảng dữ liệu */
.data-table {
  width: 100%;
  max-height: 500px;
  border-collapse: collapse;
}
.data-table th,
.data-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}
.data-table th {
  background-color: #f8f9fa;
  font-weight: bold;
}

/* Nút thao tác */
.edit-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 3px;
  cursor: pointer;
}
.edit-button:hover {
  background-color: #0056b3;
}
.delete-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}
.delete-button:hover {
  background-color: #c82333;
}

/* Thanh phân trang */
.pagination {
  margin-top: 10px;
  text-align: center;
}
.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  background-color: white;
  cursor: pointer;
}
.pagination button.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

/* Modal */
.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Modal Buttons */
.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 1200px; /* Đảm bảo modal không quá lớn trên màn hình lớn */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: auto; /* Tạo thanh cuộn nếu nội dung quá lớn */
  max-height: 90vh; /* Chiều cao tối đa chiếm 90% màn hình */
}
.save-button, .cancel-button {
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
.modal table {
  width: 100%; /* Bảng chiếm toàn bộ chiều rộng modal */
  border-collapse: collapse; /* Gộp đường viền của bảng */
}

.modal table th,
.modal table td {
  border: 1px solid #ddd; /* Đường viền bảng */
  padding: 8px; /* Khoảng cách nội dung và đường viền */
  text-align: center; /* Canh giữa nội dung */
}

.modal table input {
  width: 100%; /* Input chiếm toàn bộ ô chứa */
  padding: 6px; /* Tạo khoảng cách bên trong input */
  box-sizing: border-box; /* Tính padding vào chiều rộng */
}

.save-button {
  background-color: #28a745;
  color: white;
  border: none;
}
.save-button:hover {
  background-color: #218838;
}
.cancel-button {
  background-color: #dc3545;
  color: white;
  border: none;
}
.cancel-button:hover {
  background-color: #c82333;
}
.tree {
    margin: 10px 0;
    width: 50%;
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
  .modal-buttons {
    display: flex;
    justify-content: flex-end; /* Canh phải */
    gap: 10px; /* Khoảng cách giữa các nút */
  }
  
</style>
