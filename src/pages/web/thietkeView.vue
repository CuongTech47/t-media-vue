
<template>
  <header class="header" data-header>
    <div class="container">

      <!--            <a href="#" class="logo">T-MEDIA GROUP</a>-->
      <img src="../../assets/images/logo.png" width="70px">

      <nav class="navbar container" data-navbar>
        <ul class="navbar-list">

          <li>
            <a href="#home" class="navbar-link" data-nav-link>Home</a>
          </li>

          <li>
            <a href="#service" class="navbar-link" data-nav-link>Ưu Điểm</a>
          </li>

          <li>
            <a href="#project" class="navbar-link" data-nav-link>Hình thức</a>
          </li>

          <li>
            <a href="#about" class="navbar-link" data-nav-link>Tại sao</a>
          </li>

          <li>
            <a href="#service1" class="navbar-link" data-nav-link>Bảng giá</a>
          </li>
          <li>
            <a href="#service2" class="navbar-link" data-nav-link>Quy trình</a>
          </li>

          <li>
            <a href="#contact" class="navbar-link" data-nav-link>Liên hệ</a>
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
            <a href="/" class="btn btn-primary">Trang chủ</a>
          </li>



        </ul>
      </nav>

      <button class="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler @click="toggleNavbar">
        <ion-icon name="menu-outline" class="open"></ion-icon>
        <ion-icon name="close-outline" class="close"></ion-icon>
      </button>

    </div>
  </header>
  <main>
    <article>
      <section class="section hero" id="home" aria-label="hero">
        <div class="container">
          <div class="hero-content">

            <p class="hero-subtitle">T-MEDIA GROUP Marketing Agency</p>

            <h1 class="h1 hero-title">Thiết Kế Website</h1>

            <p class="hero-text">
              Bắt đầu cùng với đội ngũ chuyên nghiệp của chúng tôi
            </p>

            <a href="#" class="btn btn-primary">Get Started</a>

          </div>
          <figure class="hero-banner">
            <img src="../../assets/images/Frame-107-2048x1000.png" alt="hero banner" class="w-100">
          </figure>

        </div>



      </section>

      <section class="section about" id="about" aria-label="about">
        <div class="container">

          <div class="about-banner img-holder" style="--width: 930; --height: 960;">
            <img src="../../assets/images/quang-cao-facebook1.png" width="1000" height="1000" loading="lazy" alt="about banner"
                 class="img-cover">

            <button class="play-btn" aria-label="Play video">
              <ion-icon name="play" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <div class="about-content">

            <h2 class="h2 section-title">TẠI SAO NÊN SỬ DỤNG Dịch Vụ Thiết Kế Website ?</h2>

            <!--            <p class="section-text">-->
            <!--              Câu trả lời ngắn gọn là vì chúng ta cần để tăng tỷ lệ chuyển đổi cho bạn-->
            <!--            </p>-->

            <!--          <h3 class="h3">Tại Sao Chọn Chúng Tôi?</h3>-->

            <!--          <p class="section-text">-->
            <!--            Chúng tôi hiểu rằng môi trường kinh doanh ngày càng phức tạp và đầy cạnh tranh. Vì vậy, chúng tôi không chỉ tập trung vào việc thực hiện chiến dịch tiếp thị, mà còn vào việc hiểu sâu về mục tiêu của bạn và đối tượng tiêu dùng. Sự kết hợp giữa nghiên cứu thị trường chi tiết và sáng tạo không giới hạn giúp chúng tôi tạo ra các chiến dịch tiếp thị tùy chỉnh, độc đáo và hiệu quả.-->
            <!--          </p>-->

            <!--          <h3 class="h3">Cơ Sở Hạ Tầng Và Công Nghệ Hiện Đại</h3>-->

            <!--          <p class="section-text">-->
            <!--            Chúng tôi đầu tư mạnh mẽ vào cơ sở hạ tầng và công nghệ tiên tiến để đảm bảo rằng mọi chiến dịch của bạn được triển khai một cách suôn sẻ và theo dõi một cách tỉ mỉ. Sự kết hợp giữa trí tuệ nhân tạo, phân tích dữ liệu và công cụ tiếp thị hàng đầu giúp chúng tôi cung cấp thông tin cần thiết và hiểu biết chi tiết để bạn có thể ra quyết định đúng đắn.-->
            <!--          </p>-->

            <!--          <h3 class="h3">Thành công của chúng tôi</h3>-->

            <ul class="about-list">

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Nếu bạn chưa hiểu rõ được thiết kế Website cần làm những gì, thì hãy tìm kiếm những dịch vụ chuyên về website để làm. Bởi vì thành quả hoàn thiện sẽ có chiều sâu và khách hàng khi nhìn vào website có thể cảm nhận được sự chuyên nghiệp để tin tưởng dịch vụ của bạn.
                </p>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                <p class="section-text">
                  Giúp nâng cao vị thế doanh nghiệp, website là một kênh truyền thông mạnh mẽ, tối ưu giao diện, nội dung sẽ giúp nâng tầm doanh nghiệp của bạn trên bảng xếp hạng google. Điều này góp phần lớn giúp nâng cao vị thế doanh nghiệp của bạn.
                </p>
              </li>

              <!--              <li class="about-item">-->
              <!--                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>-->

              <!--                <p class="section-text">-->
              <!--                  Google Smart Shopping (chiến dịch mua sắm thông minh), dùng nhiều trong thương mại điện tử, vừa hướng đến mục tiêu khách mua hàng tiềm năng chính xác, vừa có thể tạo điểm nhấn thông qua: Tên sản phẩm, hình ảnh của sản phẩm,..-->
              <!--                </p>-->
              <!--              </li>-->

            </ul>

            <!--          <h3 class="h3">Nhiệm vụ của chúng tôi</h3>-->

            <!--          <p class="section-text">-->
            <!--            Chúng tôi cam kết mang lại giá trị tối ưu cho mỗi khách hàng, không chỉ bằng cách đưa ra các chiến dịch tiếp thị hiệu quả, mà còn bằng cách thấu hiểu sâu sắc về nhu cầu và mục tiêu của họ. Chúng tôi tin rằng sự sáng tạo có thể thay đổi mọi thứ, và sự tiếp thị tinh tế là chìa khóa để nắm bắt cơ hội.-->
            <!--          </p>-->

          </div>

        </div>
      </section>
      <section class="section service" id="service" aria-label="service">
        <div class="container">

          <h2 class="h3 section-title">
            Ưu Điểm Của Thiết Kế Website Tại T-Media</h2>

          <p class="section-text">
            Trong một thế giới ngày càng phát triển và cạnh tranh, Marketing trở thành một yếu tố quan trọng không thể thiếu cho mọi doanh nghiệp và tổ chức. Đó không chỉ là việc quảng cáo sản phẩm hoặc dịch vụ của bạn, mà còn là cách bạn xây dựng và duy trì mối quan hệ với khách hàng.
          </p>

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #13c4a1">
                  <ion-icon name="chatbox"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Thiết Kế Layout Đẹp </a>
                </h3>

                <p class="card-text">
                  Những thiết kế Website bắt mắt, thu hút khách hàng từ những thao tác đầu tiên. Mỗi giao diện sẽ phù hợp với từng ngành nghề của khách hàng yêu cầu. Giúp tối ưu hình ảnh thương hiệu, tạo dấu ấn riêng
                </p>

              </div>
            </li>
            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #13c4a1">
                  <ion-icon name="chatbox"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Lập Trình Công Nghệ Mới</a>
                </h3>

                <p class="card-text">
                  Tối ưu trãi nghiệm người dùng,phân tích trang web để đưa ra, thử nghiệm những giải pháp giúp tăng tỷ lệ lượng khách hàng vào website và thực hiện các nút (Buttons) kêu gọi hành động theo mục đích của doanh nghiệp
                </p>

              </div>
            </li>
            <li>
              <div class="service-card">

                <div class="card-icon" style="background-color: #13c4a1">
                  <ion-icon name="chatbox"></ion-icon>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Bảo Hành & Hỗ Trợ Nhanh
                  </a>
                </h3>

                <p class="card-text">
                  Đánh giá chi tiết về thị trường mục tiêu của doanh nghiệp và bối cảnh cạnh tranh trong một ngành cụ thể. Phân tích thị trường cho phép bạn dự đoán mức độ thành công mong đợi khi giới thiệu thương hiệu và các sản phẩm của thương hiệu với người tiêu dùng trong thị trường.
                </p>

              </div>
            </li>













          </ul>

        </div>
      </section>


      <section class="section service" id="service1" aria-label="service">
        <div class="container">

          <h2 class="h3 section-title">
            Bảng Giá Dịch Vụ Thiết Kế Website Giá Rẻ</h2>

          <!--          <p class="section-text">-->
          <!--            Dưới đây là bảng báo giá dịch vụ website  của T-Media. Quý khách hàng có nhu cầu tìm hiểu hoặc tư vấn về dịch vụ, vui lòng liên hệ hotline 0974 151514 để nhận hỗ trợ của chuyên viên marketing. Trân trọng-->
          <!--          </p>-->

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <p class="card-text">GÓI CLASSIC</p>



                <h3 class="h3">
                  <a href="#" class="card-title">3.900.000đ</a>
                </h3>
                <ul class="about-list">

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Phi gia hạn từ năm 2: 1.800.000 đ / Năm
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Tên miền quốc tế: 1
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Dung lượng Hosting: 4 GB
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Băng Thông Hosting: 40 GB
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Code web: Chuẩn SEO
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Bàn giao Code Web: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Giao diện Responsive: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Bảo hành: Trọn đời
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Nâng cấp: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Email doanh nghiệp: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Tích hợp công cụ marketing: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Thời gian bàn giao: 5 ngày
                    </p>
                  </li>




                </ul>


              </div>
            </li>

            <li>
              <div class="service-card">

                <p class="card-text">GÓI PRO</p>

                <h3 class="h3">
                  <a href="#" class="card-title">5.900.000đ</a>
                </h3>
                <ul class="about-list">

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Phí gia hạn từ năm 2: 2.400.000 đ /Năm
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Tên miền quốc tế: 1
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Dung lượng Hosting: 6 GB
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Băng Thông Hosting: 70 GB
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Code web: Chuẩn SEO
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Bàn giao Code Web: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Giao diện Responsive: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Đổi màu chủ đạo: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Bảo mật SSL: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Bảo hành: Trọn đời
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Nâng cấp: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Email doanh nghiệp: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Tích hợp công cụ marketing: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Tặng khóa học: Bán hàng online
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Tặng: 1 banner
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Hỗ trợ: Cập nhập 10 tin
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Thời gian bàn giao: 4 ngày
                    </p>
                  </li>




                </ul>


              </div>
            </li>

            <li>
              <div class="service-card">

                <p class="card-text">GÓI PREMIUM</p>

                <h3 class="h3">
                  <a href="#" class="card-title">9.900.000đ</a>
                </h3>
                <ul class="about-list">

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Phí gia hạn từ năm 2: 3.000.000 đ /Năm
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Tên miền quốc tế: 1
                    </p>
                  </li>

                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Dung lượng Hosting: 9 GB
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Băng Thông Hosting: Không Giới Hạn
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Code web: Chuẩn SEO
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Bàn giao Code Web: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Giao diện Responsive: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Ẩn thông tin Websieutoc.VN: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Đổi màu chủ đạo: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Thanh toán trực tuyến: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Bảo mật SSL: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Bảo hành: Trọn đời
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Nâng cấp: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Email doanh nghiệp: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Tích hợp công cụ marketing: Có
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Tặng khóa học: Bán hàng online
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Tặng: 2 banner
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Hỗ trợ: Cập nhập 20 tin
                    </p>
                  </li>
                  <li class="about-item">
                    <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

                    <p class="section-text">
                      Thời gian bàn giao: 3 ngày
                    </p>
                  </li>



                </ul>


              </div>
            </li>





            <!--          <li>-->
            <!--            <div class="service-card">-->

            <!--              <div class="card-icon" style="background-color: #ff612f">-->
            <!--                <ion-icon name="build"></ion-icon>-->
            <!--              </div>-->

            <!--              <h3 class="h3">-->
            <!--                <a href="#" class="card-title">Marketing & Reporting</a>-->
            <!--              </h3>-->

            <!--              <p class="card-text">-->
            <!--                Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem-->
            <!--                aperiam, eaque-->
            <!--                ipsa quae.-->
            <!--              </p>-->

            <!--            </div>-->
            <!--          </li>-->

          </ul>



        </div>
      </section>

      <!--      <section class="section about" id="about" aria-label="about">-->
      <!--        <div class="container">-->

      <!--          <div class="about-banner img-holder" style="&#45;&#45;width: 930; &#45;&#45;height: 960;">-->
      <!--            <img src="../../assets/images/IMG_1210-1200x800.jpg" width="1000" height="1000" loading="lazy" alt="about banner"-->
      <!--                 class="img-cover">-->

      <!--            <button class="play-btn" aria-label="Play video">-->
      <!--              <ion-icon name="play" aria-hidden="true"></ion-icon>-->
      <!--            </button>-->
      <!--          </div>-->

      <!--          <div class="about-content">-->

      <!--            <h2 class="h2 section-title">QUÀ TẶNG KHÁCH HÀNG KHI ĐĂNG KÝ TĂNG FOLLOW TẠI T-Media MARKETING </h2>-->

      <!--            &lt;!&ndash;          <p class="section-text">&ndash;&gt;-->
      <!--            &lt;!&ndash;            Tại T-MEDIA GROUP, chúng tôi tận dụng sự mạnh mẽ của tiếp thị để biến ý tưởng thành hiện thực. Chúng tôi là một đội ngũ chuyên nghiệp và sáng tạo, cam kết mang lại giá trị tối ưu cho khách hàng của mình thông qua chiến dịch tiếp thị độc đáo và hiệu quả.&ndash;&gt;-->
      <!--            &lt;!&ndash;          </p>&ndash;&gt;-->

      <!--            &lt;!&ndash;          <h3 class="h3">Tại Sao Chọn Chúng Tôi?</h3>&ndash;&gt;-->

      <!--            &lt;!&ndash;          <p class="section-text">&ndash;&gt;-->
      <!--            &lt;!&ndash;            Chúng tôi hiểu rằng môi trường kinh doanh ngày càng phức tạp và đầy cạnh tranh. Vì vậy, chúng tôi không chỉ tập trung vào việc thực hiện chiến dịch tiếp thị, mà còn vào việc hiểu sâu về mục tiêu của bạn và đối tượng tiêu dùng. Sự kết hợp giữa nghiên cứu thị trường chi tiết và sáng tạo không giới hạn giúp chúng tôi tạo ra các chiến dịch tiếp thị tùy chỉnh, độc đáo và hiệu quả.&ndash;&gt;-->
      <!--            &lt;!&ndash;          </p>&ndash;&gt;-->

      <!--            &lt;!&ndash;          <h3 class="h3">Cơ Sở Hạ Tầng Và Công Nghệ Hiện Đại</h3>&ndash;&gt;-->

      <!--            &lt;!&ndash;          <p class="section-text">&ndash;&gt;-->
      <!--            &lt;!&ndash;            Chúng tôi đầu tư mạnh mẽ vào cơ sở hạ tầng và công nghệ tiên tiến để đảm bảo rằng mọi chiến dịch của bạn được triển khai một cách suôn sẻ và theo dõi một cách tỉ mỉ. Sự kết hợp giữa trí tuệ nhân tạo, phân tích dữ liệu và công cụ tiếp thị hàng đầu giúp chúng tôi cung cấp thông tin cần thiết và hiểu biết chi tiết để bạn có thể ra quyết định đúng đắn.&ndash;&gt;-->
      <!--            &lt;!&ndash;          </p>&ndash;&gt;-->

      <!--            &lt;!&ndash;          <h3 class="h3">Thành công của chúng tôi</h3>&ndash;&gt;-->

      <!--            <ul class="about-list">-->

      <!--              <li class="about-item">-->
      <!--                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>-->

      <!--                <p class="section-text">-->
      <!--                  Chia Sẻ Bí Quyết Phát Triển Kênh: Khi bàn giao kênh TikTok, chúng tôi sẽ tổng hợp và chia sẻ lại tất cả những bí quyết để xây dựng và phát triển kênh TikTok toàn diện-->
      <!--                </p>-->
      <!--              </li>-->

      <!--              <li class="about-item">-->
      <!--                <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>-->

      <!--                <p class="section-text">-->
      <!--                  Hướng Dẫn Quay Video TikTok: Nhiều khách hàng sẽ gặp hạn chế về việc lên ý tưởng và cách quay video TikTok chuyên nghiệp. Chúng tôi cũng hỗ trợ khách hàng khoản này.-->
      <!--                </p>-->
      <!--              </li>-->



      <!--            </ul>-->

      <!--            &lt;!&ndash;          <h3 class="h3">Nhiệm vụ của chúng tôi</h3>&ndash;&gt;-->

      <!--            &lt;!&ndash;          <p class="section-text">&ndash;&gt;-->
      <!--            &lt;!&ndash;            Chúng tôi cam kết mang lại giá trị tối ưu cho mỗi khách hàng, không chỉ bằng cách đưa ra các chiến dịch tiếp thị hiệu quả, mà còn bằng cách thấu hiểu sâu sắc về nhu cầu và mục tiêu của họ. Chúng tôi tin rằng sự sáng tạo có thể thay đổi mọi thứ, và sự tiếp thị tinh tế là chìa khóa để nắm bắt cơ hội.&ndash;&gt;-->
      <!--            &lt;!&ndash;          </p>&ndash;&gt;-->

      <!--          </div>-->

      <!--        </div>-->
      <!--      </section>-->
      <section class="section contact" id="contact" aria-label="contact">
        <div class="container">

          <h2 class="h2 section-title">Hãy liên hệ với chúng tôi</h2>

          <p class="section-text">
            Khi Bạn Cần, Chúng Tôi Sẽ Ở Đây - Hãy Liên Hệ Với Chúng Tôi.
          </p>

          <form action="" class="contact-form">

            <div class="input-wrapper">
              <input type="text" name="name" aria-label="name" placeholder="Your name*" required class="input-field">

              <input type="email" name="email_address" aria-label="email" placeholder="Email address*" required
                     class="input-field">
            </div>

            <div class="input-wrapper">
              <input type="text" name="subject" aria-label="subject" placeholder="Subject" class="input-field">

              <input type="number" name="phone" aria-label="phone" placeholder="Phone number" class="input-field">
            </div>

            <textarea name="message" aria-label="message" placeholder="Your message...*" required
                      class="input-field"></textarea>

            <div class="checkbox-wrapper">
              <input type="checkbox" name="terms_and_policy" id="terms" required class="checkbox">

              <label for="terms" class="label">
                Accept <a href="#" class="label-link">Terms of Services</a> and <a href="#" class="label-link">Privacy
                Policy</a>
              </label>
            </div>

            <button type="submit" class="btn btn-primary">Send Message</button>

          </form>

          <ul class="contact-list">

            <li class="contact-item">
              <div class="contact-card">

                <div class="card-icon">
                  <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                </div>

                <div class="card-content">

                  <h3 class="h3 card-title">Mail Here</h3>

                  <a href="mailto:hello@luaz.com" class="card-link">abc@123.com</a>
                  <a href="mailto:info@luaz.com" class="card-link">info@123.com</a>

                </div>

              </div>
            </li>

            <li class="contact-item">
              <div class="contact-card">

                <div class="card-icon">
                  <ion-icon name="map-outline" aria-hidden="true"></ion-icon>
                </div>

                <div class="card-content">

                  <h3 class="h3 card-title">Địa chỉ</h3>

                  <address class="card-address">
                    08 Thanh Lương 3, Hoà xuân<br>
                    Cẩm lệ , Đà Nẵng, Việt Nam
                  </address>

                </div>

              </div>
            </li>

            <li class="contact-item">
              <div class="contact-card">

                <div class="card-icon">
                  <ion-icon name="headset-outline" aria-hidden="true"></ion-icon>
                </div>

                <div class="card-content">

                  <h3 class="h3 card-title">Call Here</h3>

                  <a href="tel:+1234567890" class="card-link">+123 456 7890</a>
                  <a href="tel:+2414524526" class="card-link">+241 452 4526</a>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

    </article>
  </main>


</template>
<script setup>

import {defineComponent} from "vue";
import {Link} from "view-ui-plus";
import Header from "../../components/Header.vue";

const toggleNavbar = () => {
  const navbar = document.querySelector("[data-navbar]");
  navbar.classList.toggle("active");
};

const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
    toggleNavbar(); // Close the navbar after clicking a link
  }
};
</script>
