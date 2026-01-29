<template>
  <div class="w-full fixed top-0 z-50">

    <!-- Top utility bar (UNCHANGED TEXT) -->
    <div class="bg-gray-100/20 backdrop-blur-sm border-b border-white/5">
      <div class="max-w-7xl mx-auto px-2 sm:px-4 flex items-center justify-end h-6 sm:h-8">
        <div class="flex items-center gap-1 sm:gap-2 text-[8px] sm:text-[10px]">
          <!-- <a href="#" class="bg-blue-800 text-white px-2 py-0.5 rounded text-[10px]">
            Join Us Today
          </a>
          <a href="#" class="bg-blue-800 text-white px-2 py-0.5 rounded text-[10px]">
            FIND our Location
          </a>
          <a href="#" class="bg-red-600 text-white px-2 py-0.5 rounded text-[10px]">
            WATCH LIVE SERVICE -->
          <!-- </a>
           <a href="#" class="flex items-center gap-1 px-2 py-0.5 border-l border-white/10 text-gray-800 text-[11px]">
            English -->
          <!-- </a> --> 
        </div>
      </div>
    </div>

    <!-- Main nav -->
    <nav class="bg-gradient-to-br from-[#001a3d] via-[#002D62] to-[#00152e]">
      <div class="max-w-7xl mx-auto px-2 sm:px-4">
        <div class="flex items-center justify-between h-14 sm:h-16 gap-3 sm:gap-6">

          <!-- Logo + Church Name (visible on all devices) -->
          <div class="flex items-center gap-2 sm:gap-3 shrink-0">
            <img :src="logo" alt="Logo" class="h-7 sm:h-8 w-auto" />
            <div class="flex flex-col items-start leading-tight">
              <span class="text-[8px] sm:text-[9px] lg:text-xs font-bold text-white">
                PAYNESVILLE CITY
              </span>
              <span class="text-[7px] sm:text-[7px] lg:text-[10px] tracking-wider text-white/90">
                CHURCH OF PENTECOST
              </span>
            </div>
          </div>

          <!-- Center: nav links (hide on mobile, show on desktop) -->
          <div class="hidden md:flex flex-1">
            <ul class="flex items-center gap-3 lg:gap-6 text-white uppercase font-medium tracking-wide text-xs lg:text-sm">

              <!-- Church name (desktop only) -->
              <li class="mr-1 lg:mr-2">
                <div class="flex flex-col items-start leading-tight">
                  <span class="text-[9px] lg:text-xs font-bold">
                    PAYNESVILLE CITY CHURCH
                  </span>
                  <span class="text-[7px] lg:text-[10px] tracking-wider">
                    CHURCH OF PENTECOST
                  </span>
                </div>
              </li>

              <!-- NAV ITEMS (same labels) -->
              <li class="nav-group">
                <a href="#" class="nav-item text-xs lg:text-sm" @click.prevent="goTo('/','WelcomeHero')">HOME</a>
                <div class="dropdown">
                  <a href="#" @click.prevent="goTo('/','WelcomeHero')">HOME</a>
                </div>
              </li>

              <li class="nav-group">
                <a href="#" class="nav-item text-xs lg:text-sm" @click.prevent="goTo('/about-us')">ABOUT US</a>
                <div class="dropdown">
                  <a href="#" @click.prevent="goTo('/about-us')">ABOUT US</a>
                  <a href="#" @click.prevent="goTo('/vision')">VISION</a>
                  <a href="#">MISSION</a>
                  <a href="#">BRIEF HISTORY</a>
                </div>
              </li>

              <li class="nav-group">
                <a href="#" class="nav-item text-xs lg:text-sm">LEADERSHIP</a>
                <div class="dropdown">
                  <a href="#" @click.prevent="goTo('/national-area-heads')">National and Area Head</a>
                  <a href="#" @click.prevent="goTo('/district-executive')">District Excutive</a>
                  <a href="#" @click.prevent="goTo('/district-presbytery')">District Prebetuary</a>
                </div>
              </li>

              <li class="nav-group">
                <a href="#" class="nav-item text-xs lg:text-sm">MINISTRIES</a>
                <div class="dropdown">
                  <a href="#" @click.prevent="goTo('/childrens-ministry')">CHILDERN MINISTRY</a>
                   <a href="#" @click.prevent="goTo('/youth-ministry')">YOUTH MINISTRY</a>
                    <a href="#" @click.prevent="goTo('/women-ministry')">WOMEN MINISTRY</a>
                    <a href="#" @click.prevent="goTo('/men-ministry')">MEN MINISTRY</a>
                    <a href="#" @click.prevent="goTo('/pentsos')">PENTSOS </a>
                </div>
              </li>

              <li class="nav-group">
                <a href="#" class="nav-item text-xs lg:text-sm">MEDIA</a>
                <div class="dropdown">
                  <a href="#" @click.prevent="goTo('/media')">MEDIA</a>
                  <a href="#" @click.prevent="goTo('/secretarial')">Secretarial</a>
                  <a href="#" @click.prevent="goTo('/gallery')">Gallery</a>
                </div>
              </li>

              <li class="nav-group">
                <a href="#" class="nav-item text-xs lg:text-sm">CONTACT US</a>
                <div class="dropdown">
                    <a href="#" @click.prevent="goTo('/contact')">How to reach us</a> 
                   <a href="#" @click.prevent="goTo('/chat-with-us')">online chat</a> 
                    <a href="#" @click.prevent="goTo('/join')">Join the Church</a> 

                </div>
              </li>

            </ul>
          </div>

          <!-- Right: search + mobile -->
          <div class="ml-auto flex items-center gap-3">
            <button class="text-white hover:text-gray-100 text-sm">
              <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                   viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 2a8 8 0 105.29 14.29l4.37 4.37 1.41-1.41-4.37-4.37A8 8 0 0010 2z"/>
              </svg> -->
            </button>

            <div class="md:hidden">
              <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-white">
                <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-width="2" stroke-linecap="round"
                        d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                <svg v-else class="h-6 w-6" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-width="2" stroke-linecap="round"
                        d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </nav>

    <!-- Mobile menu (same text) -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-gradient-to-br from-black to-[#001a3d] border-t border-white/5 max-h-[80vh] overflow-y-auto">
      <div class="px-4 py-6 space-y-1 uppercase text-xs text-white">
        <div @click.prevent="goTo('/','WelcomeHero')" class="cursor-pointer px-4 py-3 hover:bg-white/10 rounded transition-colors">HOME</div>
        <div class="px-4 py-3 hover:bg-white/10 rounded transition-colors">
          <div class="font-semibold text-[11px] mb-2">ABOUT US</div>
          <div class="pl-4 space-y-2 text-[10px] font-normal">
            <div @click.prevent="goTo('/about-us')" class="cursor-pointer text-gray-300 hover:text-white">ABOUT US</div>
            <div @click.prevent="goTo('/vision')" class="cursor-pointer text-gray-300 hover:text-white">VISION</div>
            <div class="text-gray-300 hover:text-white">MISSION</div>
            <div class="text-gray-300 hover:text-white">BRIEF HISTORY</div>
          </div>
        </div>
        <div class="px-4 py-3 hover:bg-white/10 rounded transition-colors">
          <div class="font-semibold text-[11px] mb-2">LEADERSHIP</div>
          <div class="pl-4 space-y-2 text-[10px] font-normal">
            <div @click.prevent="goTo('/national-area-heads')" class="cursor-pointer text-gray-300 hover:text-white">National & Area Head</div>
            <div @click.prevent="goTo('/district-executive')" class="cursor-pointer text-gray-300 hover:text-white">District Executive</div>
            <div @click.prevent="goTo('/district-presbytery')" class="cursor-pointer text-gray-300 hover:text-white">District Presbytery</div>
          </div>
        </div>
        <div class="px-4 py-3 hover:bg-white/10 rounded transition-colors">
          <div class="font-semibold text-[11px] mb-2">MINISTRIES</div>
          <div class="pl-4 space-y-2 text-[10px] font-normal">
            <div @click.prevent="goTo('/childrens-ministry')" class="cursor-pointer text-gray-300 hover:text-white">CHILDREN MINISTRY</div>
            <div @click.prevent="goTo('/youth-ministry')" class="cursor-pointer text-gray-300 hover:text-white">YOUTH MINISTRY</div>
            <div @click.prevent="goTo('/women-ministry')" class="cursor-pointer text-gray-300 hover:text-white">WOMEN MINISTRY</div>
            <div @click.prevent="goTo('/men-ministry')" class="cursor-pointer text-gray-300 hover:text-white">MEN MINISTRY</div>
            <div @click.prevent="goTo('/pentsos')" class="cursor-pointer text-gray-300 hover:text-white">PENTSOS</div>
          </div>
        </div>
        <div class="px-4 py-3 hover:bg-white/10 rounded transition-colors">
          <div class="font-semibold text-[11px] mb-2">MEDIA</div>
          <div class="pl-4 space-y-2 text-[10px] font-normal">
            <div @click.prevent="goTo('/media')" class="cursor-pointer text-gray-300 hover:text-white">MEDIA</div>
            <div @click.prevent="goTo('/secretarial')" class="cursor-pointer text-gray-300 hover:text-white">SECRETARIAL</div>
            <div @click.prevent="goTo('/gallery')" class="cursor-pointer text-gray-300 hover:text-white">GALLERY</div>
          </div>
        </div>
        <div class="px-4 py-3 hover:bg-white/10 rounded transition-colors">
          <div class="font-semibold text-[11px] mb-2">CONTACT US</div>
            <div class="pl-4 space-y-2 text-[10px] font-normal">
            <div @click.prevent="goTo('/contact')" class="cursor-pointer text-gray-300 hover:text-white">HOW TO REACH US</div>
            <div @click.prevent="goTo('/chat-with-us')" class="cursor-pointer text-gray-300 hover:text-white">ONLINE CHAT</div>
            <div @click.prevent="goTo('/join')" class="cursor-pointer text-gray-300 hover:text-white">JOIN THE CHURCH</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
const logo = new URL('../assets/Media/PCC logo.png', import.meta.url).href

export default {
  name: 'NavBar',
  data() {
    return {
      mobileMenuOpen: false,
      logo
    }
  }
  ,
  methods: {
    goTo(path, anchor) {
      if (this.mobileMenuOpen) this.mobileMenuOpen = false
      this.$router.push(path).catch(() => {})
        .then(() => {
          if (anchor) {
            this.$nextTick(() => {
              const el = document.getElementById(anchor)
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            })
          }
        })
    }
  }
}

</script>

<style scoped>
.nav-group {
  position: relative;
}

.nav-item {
  position: relative;
  padding-bottom: 4px;
}

.nav-item::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background-color: #facc15;
  transition: width 0.3s ease;
}

.nav-group:hover .nav-item::after {
  width: 100%;
}

.dropdown {
  position: absolute;
  top: 120%;
  left: 0;
  background: white;
  color: #002D62;
  min-width: 160px;
  border-radius: 6px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition: all 0.25s ease;
  z-index: 50;
}

.nav-group:hover .dropdown {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.dropdown a {
  display: block;
  padding: 10px 14px;
  font-size: 12px;
}

.dropdown a:hover {
  background: #f1f5f9;
}
</style>
