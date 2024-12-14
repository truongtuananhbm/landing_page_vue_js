<template>
  <div class="dashboard">
    <!-- Header nằm phía trên -->
    <Header />
    <!-- Phần Breadcrumb (Thanh điều hướng) -->
    <Breadcrumb />
    <!-- Phần Main-content -->
    <div class="main-content">
      <Sidebar />
      <Table />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Sidebar from "../components/Sidebar.vue";
import Table from "../components/Table.vue";

export default {
  name: "DashboardPage",
  components: {
    Header,
    Breadcrumb,
    Sidebar,
    Table,
  },
};
</script>

<style scoped>
/* Dashboard tổng thể */
.dashboard {
  display: flex;
  flex-direction: column; /* Đặt các thành phần Header, Breadcrumb, Main-content theo chiều dọc */
  height: 100vh;
}

/* Breadcrumb chiếm toàn bộ chiều ngang */
.breadcrumb {
  width: 100%;
  background-color: #f8f9fa; /* Màu nền sáng */
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Tạo hiệu ứng bóng */
  font-size: 14px;
  color: #6c757d;
}

.main-content {
  display: flex;
  flex: 1; /* Chiếm toàn bộ không gian còn lại */
  gap: 20px; /* Tạo khoảng cách giữa Sidebar và Table */
  padding: 20px; /* Tạo khoảng cách giữa các thành phần bên trong và cạnh của màn hình */
  background-color: #e9ecef; /* Màu nền nhạt cho dễ phân biệt */
  box-sizing: border-box; /* Đảm bảo padding không ảnh hưởng đến kích thước */
}

.main-content > Sidebar {
  width: 100px; /* Chiều rộng cố định cho Sidebar */
  background-color: #f4f4f4;
  border-radius: 8px; /* Tạo bo tròn góc nếu cần */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Tạo bóng nhẹ */
  padding: 10px; /* Khoảng cách bên trong Sidebar */
}

.main-content > Table {
  flex: 1; /* Table chiếm toàn bộ không gian còn lại */
  background-color: #fff;
  border-radius: 8px; /* Tạo bo tròn góc */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Tạo bóng nhẹ */
  padding: 10px; /* Khoảng cách bên trong Table */
}
</style>
