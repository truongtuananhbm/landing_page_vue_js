<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <button>≡</button>
      </div>
      <div class="search-bar">
        <p> Tìm kiếm(Tổ, Đội, Phòng, Trưng cầu) </p>
      </div>
      <div class="user-menu">
        <span>Admin D4</span>
        <button class="settings-btn">⚙️</button>
        <button class="logout-btn">Đăng xuất</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background-color:rgb(184, 185, 185);
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo img {
  height: 40px;
}
.search-bar {
  flex: 1;
  margin: 0 20px;
  display: flex;
  align-items: center;
}
.search-bar input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.search-bar button {
  margin-left: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
.user-menu {
  display: flex;
  align-items: center;
  gap: 10px;
}
.settings-btn,
.logout-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
}
</style>
