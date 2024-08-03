<template>
  <div class="profile-container">
    <h1>User Profile</h1>
    <div class="profile-field">
      <p><strong>Name:</strong> {{ profileData.name }}</p>
    </div>
    <div class="profile-field">
      <p><strong>Email:</strong> {{ profileData.email }}</p>
    </div>
    <div class="profile-field">
      <p><strong>Date of Birth:</strong> {{ profileData.dob }}</p>
    </div>
    <div class="profile-field">
      <p><strong>Gender:</strong> {{ profileData.gender }}</p>
    </div>
    <div class="profile-field">
      <p><strong>City:</strong> {{ profileData.city }}</p>
    </div>
    <div class="profile-field">
      <p><strong>State:</strong> {{ profileData.state }}</p>
    </div>
    <div class="profile-field">
      <p><strong>Country:</strong> {{ profileData.country }}</p>
    </div>
    <div class="profile-field">
      <p><strong>LinkedIn:</strong> <a :href="profileData.linkedin" target="_blank">{{ profileData.linkedin }}</a></p>
    </div>
    <div class="profile-field">
      <p><strong>Phone:</strong> {{ profileData.phone }}</p>
    </div>
    <div class="profile-field">
      <p><strong>Bio:</strong></p>
      <p>{{ profileData.bio }}</p>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "UserProfile",
  setup() {
    const route = useRoute();
    const profileData = reactive({
      name: route.query.name || "",
      email: route.query.email || "",
      dob: route.query.dob || "",
      gender: route.query.gender || "",
      city: route.query.city || "",
      state: route.query.state || "",
      country: route.query.country || "",
      linkedin: route.query.linkedin || "",
      phone: route.query.phone || "",
      countryCode: route.query.countryCode || "",
      bio: route.query.bio || "",
    });

    return {
      profileData,
    };
  },
};
</script>

<style scoped>
.profile-container {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 500px;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.profile-field {
  margin-bottom: 1rem;
}

.profile-field strong {
  display: inline-block;
  width: 120px;
  font-weight: bold;
}

.profile-field p {
  margin: 0;
}
</style>