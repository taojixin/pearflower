<template>
<div class="Blogin">
  <div class="container">
        <!-- 注册 -->
        <div class="container_form container--signup">
            <form action="#" class="form" id="form1" method="get">
                <h2 class="form_title">注 册</h2>
                <input type="text" placeholder="User" class="input" name="user" />
                <input type="email" placeholder="Email" class="input" name="email" />
                <input type="password" placeholder="Password" class="input" name="password" />
                <input type="submit" class="btn" id="register" value="注 册">
            </form>
        </div>

        <!-- 登录 -->
        <div class="container_form container--signin">
            <form action="#" class="form" id="form2">
                <h2 class="form_title">登 录</h2>
                <input type="email" placeholder="Email" class="input" />
                <input type="password" placeholder="Password" class="input" />
                <label for=""><input type="checkbox">记住密码</label>
                <a href="#" class="link">忘记密码?</a>
                <input type="submit" class="btn" id="login" value="登 录">
            </form>
        </div>

        <!-- 浮层 -->
        <div class="container_overlay">
            <div class="overlay">
                <div class="overlay_panel overlay--left">
                    <button class="btn" id="signIn">登 录</button>
                </div>
                <div class="overlay_panel overlay--right">
                    <button class="btn" id="signUp">注 册</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name:'login_cps',
	mounted(){
		const signInBtn = document.getElementById("signIn");
		const signUpBtn = document.getElementById("signUp");
		const container = document.querySelector(".container");
		const registerBtn = document.getElementById("register");
		const loginBtn = document.getElementById("login");
		
		signInBtn.addEventListener("click", () => {
			container.classList.remove("right-panel-active");
		});
		signUpBtn.addEventListener("click", () => {
			container.classList.add("right-panel-active");
		});
		registerBtn.click=async()=>{
		// 	if(cancel) cancel()
		// 	axios({
		// 		url:'',
		// 		method:'POST',
		// 		data:`email=${email}&password=${password}`
		// 	}).then(
		// 	)
		};
		loginBtn.click=()=>{
			
		};
	}
}
</script>

<style scoped>

.Blogin {
	align-items: center;
	background-color: #e9e9e9;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: grid;
	height: 100vh;
	place-items: center;
    background: url(../assets/lihua1.jpg) no-repeat;
	background-size: 100%;
	font-size: 16px;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.form_title {
	font-weight: 300;
	margin: 0;
	margin-bottom: 1.25rem;
}

.link {
	color: #333;
	font-size: 0.9rem;
	margin-top: 0.5rem;
	text-decoration: none;
}

.container {
	/* background-color: var(--white); */
	border-radius: 0.7rem;
	box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
		0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
	height: 400px;
	max-width: 900px;
	overflow: hidden;
	position: relative;
	width: 700px;
}

.container_form {
	height: 100%;
	position: absolute;
	top: 0;
	transition: all 0.6s ease-in-out;
}

.container--signin {
	left: 0;
	width: 50%;
	z-index: 5;
}

.container.right-panel-active .container--signin {
	transform: translateX(100%);
}

.container--signup {
	left: 0;
	opacity: 0;
	width: 50%;
	z-index: 4;
}

.container.right-panel-active .container--signup {
	-webkit-animation: show 0.6s;
	animation: show 0.6s;
	opacity: 1;
	transform: translateX(100%);
	z-index: 8;
}

.container_overlay {
	height: 100%;
	left: 50%;
	overflow: hidden;
	position: absolute;
	top: 0;
	transition: transform 0.6s ease-in-out;
	width: 50%;
	z-index: 100;
}

.container.right-panel-active .container_overlay {
	transform: translateX(-100%);
}

.overlay {
	background-color: rgba(255, 255, 255, 0.25);
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
	left: -100%;
	position: relative;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
	width: 200%;
}

.container.right-panel-active .overlay {
	transform: translateX(50%);
}

.overlay_panel {
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	position: absolute;
	text-align: center;
	top: 0;
	transition: transform 0.6s ease-in-out;
	width: 50%;
	/* opacity: 0.2; */
}

.overlay--left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay--left {
	transform: translateX(0);
}

.overlay--right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay--right {
	transform: translateX(20%);
}

.btn {
	background-color: #c1be64;
	background-image: linear-gradient(90deg, #c1be64 0%, #809e56 74%);
	border-radius: 20px;
	border: 0.2px solid #dbe5eb91;
	color: #e9e9e9;
	cursor: pointer;
	font-size: 0.8rem;
	font-weight: bold;
	letter-spacing: 0.1rem;
	padding: 0.9rem 4rem;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

.form > .btn {
	margin-top: 1rem;
}

.btn:active {
	transform: scale(0.95);
}

.btn:focus {
	outline: none;
}

.form {
    background-color: #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 3rem;
    height: 100%;
    text-align: center;
}

.input {
    background-color: #fff;
    border: none;
    padding: 0.9rem 0.9rem;
    margin: 0.5rem 0;
    width: 100%;
}
label{
	color: #333;
	font-size: 0.9rem;
	margin-top: 0.7rem;
}

@-webkit-keyframes show {
    0%,
    49.99% {
        opacity: 0;
        z-index: 4;
    }

    50%,
    100% {
        opacity: 1;
        z-index: 8;
    }
}
@keyframes show {
    0%,
    49.99% {
        opacity: 0;
        z-index: 4;
    }

    50%,
    100% {
        opacity: 1;
        z-index: 8;
    }
}
.slidershow {
    width: 100vw;
    height: 100vh;
	background-size: contain;
}
</style>