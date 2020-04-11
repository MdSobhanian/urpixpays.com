<template>
  <div class="footer-area">
    <div class="row">
      <div class="col-sm-3" style="margin-bottom: 20px">
        <div class="footer li_style widget_text" style="color:white; text-declaton:none;text-align: left">
        <img src="/static/imgs/Logo-Horizontal-Small.gif" width="150px" style="border-radius: 20%;">
        </div>
      </div>
      <div class="col-sm-2" style="margin-bottom: 20px">
        <div class="footer li_style widget_text" style="color:white; text-declaton:none;text-align: left">
          <a href="/about_us"><h4 style="color:white; font-size: 18px">About Us</h4></a>
          <div class="textwidget">
            <a href="/term_conditions"><p style="color:white; font-weight: lighter; margin-bottom: 5px; font-family: sans-serif;font-size: 14px">Term and conditions</p></a>
            <a href="/privacy"><p style="color:white; font-weight: lighter; margin-bottom: 5px; font-family: sans-serif;font-size: 14px">Privacy and policy</p></a>
            <a href="/copyright"><p style="color:white; font-weight: lighter; margin-bottom: 5px; font-family: sans-serif;font-size: 14px">Copyright</p></a>
          </div>
        </div>
      </div>
      <div class="col-sm-2" style="margin-bottom: 20px">
        <div class="footer li_style widget_pages" style="text-align: left">
          <h4 style="color:white;font-size: 18px;">Pages</h4>
          <ul>
            <li class="page_item page-item-86"><a href="challenges/my" style="color:white; font-weight: lighter; margin-bottom: 5px; font-family: sans-serif;font-size: 14px">Home</a></li>
            <li class="page_item page-item-87"><a href="challenges/my" style="color:white; font-weight: lighter; margin-bottom: 5px; font-family: sans-serif;font-size: 14px">My Challenges</a></li>
            <li class="page_item page-item-99"><a href="myprofile" style="color:white; font-weight: lighter; margin-bottom: 5px; font-family: sans-serif;font-size: 14px">My Profile</a></li>
            <li class="page_item page-item-24"><a href="shop" style="color:white; font-weight: lighter; margin-bottom: 5px; font-family: sans-serif;font-size: 14px">Buy/Sell Page</a></li>

            <li class="page_item page-item-106"><a href="invite" style="color:white;;font-size: 14px">Invite Friends</a></li>
            <li class="page_item page-item-61"><a href="challenges/my" style="color:white;;font-size: 14px">Buy Flip/Charge/Wand</a>
            </li>
            <li class="page_item page-item-88"><a href="info_page" style="color:white;;font-size: 14px">Information Page</a></li>

          </ul>
        </div>
      </div>
      <div class="col-sm-2" style="margin-bottom: 20px">
        <div class="footer li_style widget_text" style="text-align: left;">
          <h4 style="color:white; font-size: 18px;">Contact us</h4>
          <div class="textwidget">
            <div class="contact-us">
              <ul>
                <span style="color:white; font-size: 14px;"> info@urpixpays.com</span>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3" style="margin-bottom: 20px">
        <div class="footer li_style widget_text" style="text-align: left;">
          <h4 style="color:white; font-size: 18px;">Social Medias</h4>
          <div class="textwidget">
            <div class="contact-us">
              <ul>
                <li><a href="https://m.facebook.com/groups/2203046779772264/" style="color:white;font-size: 14px"><i class="fab fa-facebook"></i> Facebook</a></li>
                <li><a href="https://twitter.com/urpixpays" style="color:white;font-size: 14px"><i class="fab fa-twitter"></i>
                  Twitter</a></li>
                <li><a href="https://www.instagram.com/urpixpays" style="color:white;font-size: 14px"><i class="fab fa-instagram"></i>
                  Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- Trigger the modal with a button -->
      <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal"
              style="display:none;">Open Modal
      </button>

      <!-- Modal -->
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog congrate-modal">

          <!-- Modal content-->
          <div class="modal-content congrate-modal"
               style=" background-size:contain;background-position:center;background-repeat:no-repeat;border:1px solid yellow">
            <div style="margin-top: 80%;color: yellow;text-align: center;font-size:25px; font-weight: 500;">New
              Rank:<span style="margin-left:30px;">2</span></div>
            <button>OK</button>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { fas } from '@fortawesome/free-solid-svg-icons'
  library.add(fas)
  export default {
    data() {
      return {}
    },
    methods: {}
  }
</script>
