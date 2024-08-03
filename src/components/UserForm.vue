<template>
  <div class="form-container">
    <h1>User Profile Form</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" v-model="formData.email" type="email" required />
      </div>
      <div class="form-group">
        <label for="dob">Date of Birth:</label>
        <input id="dob" v-model="formData.dob" type="date" required />
      </div>
      <div class="form-group phone-input">
        <label for="phone">Phone Number:</label>
        <vue-tel-input
          v-model="formData.phone"
          v-model:country="formData.phoneCountry"
          :inputOptions="{ showDialCode: true }"
          :dropdownOptions="{
            showDialCodeInSelection: true,
            showFlags: true,
            showCountryISO: true,
          }"
          @validate="validatePhone"
          required
        ></vue-tel-input>
      </div>
      <div class="form-group">
        <label for="gender">Gender:</label>
        <select id="gender" v-model="formData.gender" required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="form-group">
        <label for="city">City:</label>
        <input id="city" v-model="formData.city" required />
      </div>
      <div class="form-group">
        <label for="state">State:</label>
        <input id="state" v-model="formData.state" required />
      </div>
      <div class="form-group">
        <label for="country">Country:</label>
        <input id="country" v-model="formData.country" required />
      </div>
      <div class="form-group">
        <label for="linkedin">LinkedIn Profile:</label>
        <input id="linkedin" v-model="formData.linkedin" type="url" />
      </div>

      <div class="form-group">
        <label for="bio">Bio/About:</label>
        <textarea id="bio" v-model="formData.bio" rows="4"></textarea>
      </div>
      <button type="submit" :disabled="!isPhoneValid">Submit</button>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";

export default {
  name: "UserForm",
  components: {
    VueTelInput,
  },
  setup() {
    const router = useRouter();
    const isPhoneValid = ref(false);
    const formData = reactive({
      name: "",
      email: "",
      dob: "",
      gender: "",
      city: "",
      state: "",
      country: "",
      linkedin: "",
      phone: "",
      phoneCountry: {},
      bio: "",
    });

    const validatePhone = (isValid) => {
      isPhoneValid.value = isValid;
    };

    const submitForm = () => {
      if (isPhoneValid.value) {
        router.push({
          path: "/profile",
          query: {
            ...formData,
            countryCode: formData.phoneCountry.dialCode,
          },
        });
      }
    };

    return {
      formData,
      submitForm,
      validatePhone,
      isPhoneValid,
    };
  },
};
</script>

<style scoped>
.form-container {
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

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input,
select,
textarea,
.vue-tel-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
}

.phone-input {
  margin-bottom: 1rem;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
