<template>
    <footer class="site-footer">
      <div class="container">
        <div class="footer-content">
          <p>©2019 by Yassine NATIJ. Proudly created with Vue.js</p>
          <!-- <div class="footer-links">
            <a href="https://github.com/theglitch1" target="_blank">GitHub</a>
          </div> -->
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  .site-footer {
    padding: 20px 0;
    background-color:  inherit; /*#2c3e50; Adjust to match your site's theme */
    color: white;
    font-size: 14px;
  }
  
  /* .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  } */
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-links a {
    margin-left: 15px;
    color: white;
    text-decoration: none;
  }
  
  .footer-links a:hover {
    text-decoration: underline;
  }
  </style>