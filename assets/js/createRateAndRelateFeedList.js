import { pythonURI, fetchOptions } from "./api/config.js";

async function generateImage(int) {
    try {
        const postApiUrl = `${pythonURI}/api/id/nestImg`
        const postApiRequest = await fetch(postApiUrl, {
            ...fetchOptions,
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"imageID": int})
        });

        if (!postApiRequest.ok) {
            throw new Error('Failed to fetch image API source: ' + postApiRequest.statusText);
        }
        const postData = await postApiRequest.json();
        return postData
    } catch (error) {
        // Catches errors
        console.error('Error fetching data:', error);
    }
}

// Function to create an image post with caption and user/date info
export async function createImagePost(postObj) {
    // Destructure the object to extract necessary details
    const imageData = await generateImage(1)
    const imageUrl = imageData.postImg
    console.log(imageUrl)
    const caption = postObj.title;
    const user = postObj.user_name;
    const datePosted = "10/10/10";

    // Create a container for the post
    const postContainer = document.createElement("div");
    postContainer.classList.add("postFeed");

    // Create the image element
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("imageContainer");
    const imageElement = document.createElement("img");
    imageElement.src = `data:image/jpeg;base64,${imageUrl}`;
    imageDiv.appendChild(imageElement);

    // Create the caption container
    const captionDiv = document.createElement("div");
    captionDiv.classList.add("textContainer");
    const captionElement = document.createElement("h3");
    captionElement.innerHTML = caption;
    captionDiv.append(captionElement)
    
    // Create the user and date info element
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("textInfo");
    const datePostedElement = document.createElement("p");
    datePostedElement.innerHTML = "Date Posted: " + datePosted;
    infoDiv.append(datePostedElement);
    const userPostedElement = document.createElement("p");
    userPostedElement.innerHTML = "Posted by: " + user
    infoDiv.append(userPostedElement);
    
    // Append everything to the post container
    postContainer.appendChild(imageDiv);
    postContainer.appendChild(captionDiv);
    postContainer.appendChild(infoDiv);
    
    return postContainer
}