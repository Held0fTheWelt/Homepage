<template>
    <v-container>
        Test
        <v-container id="unity-container" class="unity-desktop">
            <canvas id="unity-canvas"></canvas>
        </v-container>
        <v-container id="loading-cover" style="display:none;">
            <v-container id="unity-loading-bar">
            <v-container id="unity-logo">
                <v-img alt="Yves Tanas Logo"
                    class="shrink mr-2"
                    contain
                    src="@/assets/logo.png"
                    transition="scale-transition"
                    width="40"></v-img>
            </v-container>
            <v-container id="unity-progress-bar-empty" style="display: none;">
                <v-container id="unity-progress-bar-full"></v-container>
            </v-container>
            <v-container class="spinner"></v-container>
            </v-container>
        </v-container>
        <v-container id="unity-fullscreen-button" style="display: none;"/>
    </v-container>
</template>

<script>

    // const hideFullScreenButton = "";
    // const buildUrl = "Build";
    // const loaderUrl = buildUrl + "/webbuild.loader.js";
    // const config = {
    //   dataUrl: buildUrl + "/webbuild.data.gz",
    //   frameworkUrl: buildUrl + "/webbuild.framework.js.gz",
    //   codeUrl: buildUrl + "/webbuild.wasm.gz",
    //   streamingAssetsUrl: "StreamingAssets",
    //   companyName: "Yves Tanas",
    //   productName: "Three Way Cube",
    //   productVersion: "0.1",
    // };

    // const container = document.querySelector("#unity-container");
    // const canvas = document.querySelector("#unity-canvas");
    // const loadingCover = document.querySelector("#loading-cover");
    // const progressBarEmpty = document.querySelector("#unity-progress-bar-empty");
    // const progressBarFull = document.querySelector("#unity-progress-bar-full");
    // const fullscreenButton = document.querySelector("#unity-fullscreen-button");
    // const spinner = document.querySelector('.spinner');

    // const canFullscreen = (function() {
    //   for (const key of [
    //       'exitFullscreen',
    //       'webkitExitFullscreen',
    //       'webkitCancelFullScreen',
    //       'mozCancelFullScreen',
    //       'msExitFullscreen',
    //     ]) {
    //     if (key in document) {
    //       return true;
    //     }
    //   }
    //   return false;
    // }());

    // if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    //   container.className = "unity-mobile";
    //   config.devicePixelRatio = 1;
    // }
    // loadingCover.style.display = "";

    // const script = document.createElement("script");
    // script.src = loaderUrl;
    // script.onload = () => {
    //   createUnityInstance(canvas, config, (progress) => {
    //     spinner.style.display = "none";
    //     progressBarEmpty.style.display = "";
    //     progressBarFull.style.width = `${100 * progress}%`;
    //   }).then((unityInstance) => {
    //     loadingCover.style.display = "none";
    //     if (canFullscreen) {
    //       if (!hideFullScreenButton) {
    //         fullscreenButton.style.display = "";
    //       }
    //       fullscreenButton.onclick = () => {
    //         unityInstance.SetFullscreen(1);
    //       };
    //     }
    //   }).catch((message) => {
    //     alert(message);
    //   });
    // };
    // document.body.appendChild(script);

export default {

}
</script>

<style scoped>

</style>
