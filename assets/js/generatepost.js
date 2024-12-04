
   // code div that has option to get camera (function is already coded and a text box. all boxes need an x at the top corner to exist)
   
   // Iniital decleration of variables
    const myDiv = document.getElementById("mediaUploader");
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const photo = document.getElementById('photo');
    const captureButton = document.getElementById('capture');
    const cameraSelect = document.getElementById('cameraSelect');
    const retakeButton = document.getElementById('retakePhoto');
    const confirmButton = document.getElementById('confirmPhoto');
    let currentStream = null;
    let freshPage = true;
    function getCameraStream(deviceId) {
        // Checks if currentStream exists
        if (currentStream) {
            // Stop the previous stream if there's any
            currentStream.getTracks().forEach(track => track.stop());
        }
        // Creates local variable constraints which sets video taking device
        const constraints = {
            // Checks if deviceId exists, if it does set 'exact' to deviceId, then use default
            video: { deviceId: deviceId ? { exact: deviceId } : undefined }
        };
        // Access the camera stream based on selected deviceId
        navigator.mediaDevices.getUserMedia(constraints)
            // 'stream' is equal to the object output by 'getUserMedia'
            .then(function (stream) {
                currentStream = stream;
                // Sets the video elements source to the stream
                video.srcObject = stream;
            })
            // If it fails to receive an object this returns an error
            .catch(function (err) {
                // err is a variable returned by getUserMedia when it fails
                console.log("Error accessing the camera: " + err);
            });
    };
    function toggleDiv() {
        // Checks if myDiv is visible
        const myDivVisibility = window.getComputedStyle(myDiv).visibility
        if (myDivVisibility == "hidden") {
            // Makes myDiv visible and removes the ability to scroll the page
            myDiv.style.visibility = "visible";
            document.body.style.overflow = "hidden";
            if (!freshPage) {
                retakePhoto();
            }
        } else {
            myDiv.style.visibility = "hidden";
            document.body.style.overflow = "visible";
            currentStream.getTracks().forEach(track => track.stop());
    }};
    function captureImage() {
        // Hides the photo taking elements
        freshPage = false;
        video.style.display = "none";
        captureButton.style.display = "none";
        cameraSelect.style.display = "none";
        photo.style.display = "block";
        retakeButton.style.display = "inline-block";
        confirmButton.style.display = "inline-block";
        // Sets image parameter to be 2d
        const context = canvas.getContext('2d');
        // Creates the image, with a width and height equal to the canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        // imageData variable is set to the canvas current urt
        const imageData = canvas.toDataURL('image/png');
        // Sets the image element to the canvas image.
        photo.setAttribute('src', imageData);
        currentStream.getTracks().forEach(track => track.stop());
    };
    function retakePhoto() {
        video.style.display = "block";
        captureButton.style.display = "inline-block";
        cameraSelect.style.display = "inline-block";
        photo.style.display = "none";
        retakeButton.style.display = "none";
        confirmButton.style.display = "none";
        getCameraStream(cameraSelect.value);
    }
    // Creates a list of options for possible video input devices
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
        devices.forEach(function (device) {
            // Checks if the device is a video input device
            if (device.kind === 'videoinput') {
                // Creates a dropdown list of options
                const option = document.createElement('option');
                // Sets initial value of dropdown to the currently selected deviceId
                option.value = device.deviceId;
                // Sets initial label of dropdown to currently selected device name or 'Camera (number)'
                option.text = device.label || `Camera ${cameraSelect.length + 1}`;
                // Adds the adds the option element to page to the select element with id = "cameraSelect"
                cameraSelect.appendChild(option);
            }
        });
    });
    // When the selected camera changes, update the video stream
    cameraSelect.onchange = function() {
        // Reruns the getCameraStream function with new value
        getCameraStream(cameraSelect.value);
    };
    // Automatically start with the first available camera
    cameraSelect.addEventListener('change', function() {
        getCameraStream(cameraSelect.value);
        video.style.display = "block";
        captureButton.style.display = "inline-block"
    });

// div for cam

<div class="camera-div">
  <button onclick="activateCamera()">Activate Camera</button>
  <input type="text" placeholder="Enter text here...">
</div>

<script>
  // Your pre-coded camera function
  function activateCamera() {
    console.log("Camera function activated!");
    // Insert your existing camera code here
  }
</script>












