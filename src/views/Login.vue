<template>
  <div class="container">
    <div class="form-container">
      <div class="form">
        <form @submit.prevent="login">
          <input
            type="email"
            v-model="email"
            name="email"
            placeholder="Email"
          />
          <input
            type="text"
            v-model="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit" class="btn">Submit</button>
          <small class="message"
            >New User? <a href="#">Create an account</a></small
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log(this.email);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

$background-color: #ffffff;
$font-family: "Roboto", sans-serif;

@mixin btn($fontcolor: #fafafa) {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  outline: 0;
  border: 0;
  width: 100%;
  padding: 15px;
  background: #227eff;
  color: $fontcolor;
  text-transform: uppercase;
}

@mixin message($fontcolor: #90a4ae) {
  color: $fontcolor;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
}

@mixin input($bkgnd: #f5f5f5) {
  font-family: $font-family;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  outline: 0;
  font-size: 15px;
  //   text-align: center;
  box-sizing: border-box;
  background: $bkgnd;
  border-radius: 4px;
}

body {
  font-family: $font-family;
  background: $background-color;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.form-container {
  .form {
    z-index: 1;
    max-width: 350px;
    margin: 0 auto 100px;
    padding: 45px;
    background: #ffffff;
  }

  .form {
    input {
      @include input;

      ::placeholder {
        color: #90a4ae;
      }
    }

    .btn {
      @include btn;
    }

    .message {
      @include message;
      a {
        text-decoration: none;
        color: #00bfa5;
      }
    }
  }
}
</style>
