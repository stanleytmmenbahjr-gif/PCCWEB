<template>
  <div>
    <!-- ABOUT PAGE -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24 space-y-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl shadow-xl border border-gray-100">

      <!-- HEADER -->
      <div class="text-center space-y-4">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900">
          About Paynesville City Church
        </h1>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">
          A vibrant, Spirit-filled urban church committed to transforming lives and impacting society.
        </p>
        <div class="w-24 h-1 bg-[#E31E24] mx-auto rounded-full"></div>
      </div>

      <!-- HISTORY -->
      <div class="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Our History</h2>
        <p class="text-gray-700 leading-relaxed text-lg">
          Paynesville City Church (PCC) is the <strong>first City Church of The Church of Pentecost in Liberia</strong>,
          established in <strong>July 2025</strong>. It was birthed with a clear mandate to bring the Gospel
          to the urban population through innovation, discipleship, and Spirit-led ministry.
          <br /><br />
          Since its establishment, PCC has grown into a thriving center for worship, leadership development,
          and community transformation, impacting lives across Paynesville and beyond.
        </p>
      </div>

      <!-- MISSION & VISION -->
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Mission -->
        <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border-l-4 border-[#E31E24]">
          <h2 class="text-2xl font-bold mb-3 text-gray-900">Our Mission</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            To glorify God by proclaiming the full Gospel of Jesus Christ, raising disciples,
            and building a Spirit-filled community that transforms lives and impacts society.
          </p>
        </div>

        <!-- Vision -->
        <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border-l-4 border-[#E31E24]">
          <h2 class="text-2xl font-bold mb-3 text-gray-900">Our Vision</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
             To intentionally attract people from all nationalities, workers, business men and women,
        while creating the right spiritual and socio-cultural atmosphere to nurture, maintain,
        and grow them. We envision a community of believers in Paynesville City Church who are
        spiritually empowered, culturally aware, and actively engaged in transforming their
        communities through Christ-centered impact.
          </p>
        </div>
      </div>

      <!-- CORE VALUES -->
      <div class="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition">
        <h2 class="text-2xl font-bold mb-6 text-gray-900 text-center">Our Core Values</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-lg">
          <div> Christ-Centered Living</div>
          <div> Prayer & The Word</div>
          <div> Holiness</div>
          <div> Love & Unity</div>
          <div> Excellence</div>
          <div> Evangelism</div>
        </div>
      </div>

      <!-- MINISTRIES -->
      <div class="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">Our Ministries</h2>
        <div class="grid sm:grid-cols-2 gap-4 text-gray-700 text-lg">
          <div> Youth Ministry</div>
          <div> Women’s Ministry</div>
          <div> Men’s Ministry</div>
          <div> Children’s Ministry</div>
          <div> Evangelism & Outreach</div>
          <div> Media & Innovation</div>
          <div> PENSOS</div>
          <div> Prayer Ministry</div>
        </div>
      </div>

      <!-- BELIEFS -->
      <div class="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">What We Believe</h2>
        <ul class="space-y-3 text-gray-700 text-lg list-disc list-inside">
          <li>The Bible is the inspired and infallible Word of God.</li>
          <li>Jesus Christ is the Son of God and Savior of the world.</li>
          <li>Salvation is by grace through faith in Jesus Christ.</li>
          <li>The Holy Spirit empowers believers for holy living and service.</li>
          <li>Holiness and sanctification are essential to the Christian life.</li>
        </ul>
      </div>

      <!-- 11 TENTS -->
      <div class="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition">
        <h2 class="text-2xl font-bold mb-6 text-gray-900 text-center">
          The 11 Tents of The Church of Pentecost
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-gray-700 text-lg text-center">
          <span>The Blood of Jesus</span>
          <span>Water Baptism</span>
          <span>Holy Communion</span>
          <span>Spiritual Gifts</span>
          <span>Faith</span>
          <span>Divine Healing</span>
          <span>Holiness</span>
          <span>Sanctification</span>
          <span>Prayer</span>
          <span>Evangelism</span>
          <span>Discipleship</span>
        </div>
      </div>

      <!-- COMMUNITY IMPACT -->
      <div class="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Community Impact</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Paynesville City Church is deeply committed to community transformation through outreach,
          education, leadership training, and social support initiatives.
          <br /><br />
          We exist not only as a place of worship but as a force for positive change—raising individuals
          who influence families, communities, and the nation.
        </p>
      </div>

      <!-- CTA -->
      <div class="text-center">
        <p class="text-xl sm:text-2xl md:text-3xl font-extrabold text-white bg-[#0e0606] inline-block px-6 py-4 rounded-xl shadow-lg">
          Join us — where faith ignites, lives are transformed, and communities flourish!
        </p>
      </div>

    </section>

    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue'

export default {
  name: 'AboutUs',
  components: { Footer }
}
</script>

<style scoped>
section {
  margin-top: 90px;
}

div {
  transition: all 0.3s ease;
}
</style>