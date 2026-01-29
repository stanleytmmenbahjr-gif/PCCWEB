<template>
  <div>
    <!-- ABOUT THE CHURCH OF PENTECOST -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 space-y-6 sm:space-y-8 bg-gray-50 rounded-lg shadow-md">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-center">About the Church of Pentecost</h2>

      <!-- Brief History -->
      <div>
        <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Brief History</h3>
        <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
          The Church of Pentecost Liberia is part of the global Pentecostal movement founded to spread the gospel and
          disciple believers in the power of the Holy Spirit. Over the years, it has grown into a vibrant community
          of faith, impacting lives through worship, evangelism, and holistic ministry.
        </p>
      </div>

      <!-- Organization / Tents -->
      <div>
        <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Tents / Organizational Structure</h3>
        <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
          The church is organized into districts, areas, and national leadership, with local assemblies under each
          district. This structure ensures effective oversight, discipleship, and coordination of ministry programs
          throughout Liberia.
        </p>
      </div>

      <!-- Core Beliefs -->
      <div>
        <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Core Beliefs</h3>
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-base sm:text-lg">
          <li>The authority of the Bible as the Word of God.</li>
          <li>Salvation through faith in Jesus Christ.</li>
          <li>Baptism in the Holy Spirit and gifts of the Spirit.</li>
          <li>Evangelism, discipleship, and mission-oriented living.</li>
          <li>Holistic ministry: spiritual, social, and community development.</li>
        </ul>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue'

export default {
  name: 'AboutUs',
  components: {
    Footer
  }
}
</script>

<style scoped>
section {
  margin-top: 80px;
}
</style>
