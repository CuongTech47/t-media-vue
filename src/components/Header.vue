


<template>
  <header class="header" data-header>
    <div class="container">

<!--            <a href="#" class="logo">T-MEDIA GROUP</a>-->
      <img src="../assets/images/logo.png" width="70px" />

      <nav class="navbar container" data-navbar>
        <ul class="navbar-list">

          <li>
            <a href="#home" class="navbar-link" data-nav-link>Home</a>
          </li>

          <li>
            <a href="#service" class="navbar-link" data-nav-link>Services</a>
          </li>

          <li>
            <a href="#project" class="navbar-link" data-nav-link>Project</a>
          </li>

          <li>
            <a href="#about" class="navbar-link" data-nav-link>Về chúng tôi</a>
          </li>

          <li>
            <a href="#blog" class="navbar-link" data-nav-link>Blog</a>
          </li>
<!--          <li>-->
<!--            <Link to="/facebook" class="navbar-link" data-nav-link>Facebook</Link>-->
<!--          </li>-->

          <li>
            <a href="#contact" class="navbar-link" data-nav-link>Contact Us</a>
          </li>
          <li>
            <a href="/facebook" class="navbar-link" data-nav-link>Facebook</a>
          </li>
<!--          <Dropdown>-->
<!--            <a href="javascript:void(0)">-->
<!--              Facebook-->
<!--              <Icon type="ios-arrow-down"></Icon>-->
<!--            </a>-->
<!--            <template #list>-->
<!--              <DropdownMenu>-->
<!--                <DropdownItem>驴打滚</DropdownItem>-->
<!--                <DropdownItem>炸酱面</DropdownItem>-->

<!--              </DropdownMenu>-->
<!--            </template>-->
<!--          </Dropdown>-->

          <li>
            <a href="#" class="btn btn-primary">Get Started</a>
          </li>



        </ul>
      </nav>

      <button class="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
        <ion-icon name="menu-outline" class="open"></ion-icon>
        <ion-icon name="close-outline" class="close"></ion-icon>
      </button>

    </div>
  </header>
</template>

<script setup>


import {Link} from "view-ui-plus";
</script>