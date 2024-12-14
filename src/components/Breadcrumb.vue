<template>
  <div class="breadcrumb">
    <span>Home</span> / <span>Thư viện chất chuẩn</span>
    <p>Home / Ma túy / <strong>Thư viên chất chuẩn</strong> </p>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
};
</script>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-size: 14px;
  background-color: #f8f9fa;
  color: #6c757d;
  border-bottom: 1px solid #ddd;
}
.breadcrumb span {
  margin-right: 5px;
}
</style>
