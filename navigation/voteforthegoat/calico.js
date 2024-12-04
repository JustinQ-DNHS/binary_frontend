import { pythonURI, fetchOptions } from '../../assets/js/api/config.js';

console.log("calico.js accessed")
document.querySelectorAll('.sidebar-button').forEach(button => {
    button.addEventListener('click', () => {
        const houseName = button.getAttribute('data-house');
        const channelId = button.getAttribute('data-channel-id');
        
        // Call selectItem with the correct channel ID
        selectItem(channelId);

        // Store selected house in localStorage
        localStorage.setItem('selectedHouse', houseName);
        localStorage.setItem('selectedChannelId', channelId);

        // Update the UI for the selected house
        setBackground(houseName);
        renderHousePage(houseName);
        
        // Fetch posts for the selected channel
        fetchData(channelId);
    });
});


// Handle item selection
function selectItem(channelId) {
    // Set the group ID and channel ID for posting
    document.getElementById('group_id').value = "Calico Vote"; // Adjust if dynamic group setting is needed
    document.getElementById('channel_id').value = channelId;

    // Display the post form if hidden
    const postForm = document.getElementById('postForm');
    postForm.style.display = "block";
}


/**
     * Fetch groups for dropdown selection
     * User picks from dropdown
     */
async function fetchGroups() {
    try {
        const response = await fetch(`${pythonURI}/api/groups/filter`, {
            ...fetchOptions,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ section_name: "Home Page" }) // Adjust the section name as needed
        });
        if (!response.ok) {
            throw new Error('Failed to fetch groups: ' + response.statusText);
        }
        const groups = await response.json();
        const groupSelect = document.getElementById('group_id');
        groups.forEach(group => {
            const option = document.createElement('option');
            option.value = group.name; // Use group name for payload
            option.textContent = group.name;
            groupSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching groups:', error);
    }
}

/**
 * Fetch channels based on selected group
 * User picks from dropdown
 */
async function fetchChannels(groupName) {
    try {
        const response = await fetch(`${pythonURI}/api/channels/filter`, {
            ...fetchOptions,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ group_name: groupName })
        });
        if (!response.ok) {
            throw new Error('Failed to fetch channels: ' + response.statusText);
        }
        const channels = await response.json();
        const channelSelect = document.getElementById('channel_id');
        channelSelect.innerHTML = '<option value="">Select a channel</option>'; // Reset channels
        channels.forEach(channel => {
            const option = document.createElement('option');
            option.value = channel.id;
            option.textContent = channel.name;
            channelSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching channels:', error);
    }
}

/**
  * Handle group selection change
  * Channel Dropdown refresh to match group_id change
  */
document.getElementById('group_id').addEventListener('change', function() {
    const groupName = this.value;
    if (groupName) {
        fetchChannels(groupName);
    } else {
        document.getElementById('channel_id').innerHTML = '<option value="">Select a channel</option>'; // Reset channels
    }
});


document.getElementById('channel_id').addEventListener('change', function() {
    const selectedChannel = this.options[this.selectedIndex].text;  // Get selected text
    const channelId = this.value;  // Get selected value

    if (channelId) {
        // Store the selected house and channel ID in localStorage
        localStorage.setItem('selectedHouse', selectedChannel);
        localStorage.setItem('selectedChannelId', channelId);

        // Update the page with the selected house info
        setBackground(selectedChannel);
        renderHousePage(selectedChannel);
        
        // Fetch posts for the selected channel
        fetchData(channelId);
    }
});

/**
 * Handle form submission for selection
 * Select Button: Computer fetches and displays posts
 */
document.getElementById('selectionForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const selectedChannel = document.getElementById('channel_id');
    const selectedHouse = selectedChannel.options[selectedChannel.selectedIndex].text;
    if (selectedChannel.value) {
        // Store the selected house in localStorage
        localStorage.setItem('selectedHouse', selectedHouse);
        alert(`You have selected: ${selectedHouse} House`); // Confirmation message
        renderHousePage(selectedHouse); // Update the page with the selected house
        displayPosts(selectedHouse); // Show any posts for the selected house
    } else {
        alert('Please select a valid house.');
    }
});


/**
 * Handle form submission for adding a post
 * Add Form Button: Computer handles form submission with request
 */
console.log("right before postform")
document.getElementById('postForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("post form accessed")
    const title = document.getElementById('title').value;
    const comment = document.getElementById('comment').value;
    const group = document.getElementById('group-select').value;
    const channel = document.getElementById('channel-select').value;
    const channelID = document.getElementById('postForm').getAttribute('data-channel-id'); // Retrieve the saved channel ID
    const postData = {
      title: title,
      comment: comment,
      channel_id: channelID
    }
    console.log("postdata accessed")
    try {
      const response = await fetch(`${pythonURI}/api/post`, {
        ...fetchOptions,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      });

      if (!response.ok) throw new Error('Failed to add post: ' + response.statusText);
      alert("Post added successfully!");
      console.log("post added successfully")
      // do you need to update form?
      // call refresh bottom page with new post.

    } catch (error) {
      console.error('Error adding post:', error);
      console.log("error adding post")
    }
  });

/**
 * Fetch posts based on selected channel
 * Handle response: Fetch and display posts
 */
async function fetchData(channelId) {
    try {
        const response = await fetch(`${pythonURI}/api/posts/filter`, {
            ...fetchOptions,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ channel_id: channelId })
        });
        if (!response.ok) {
            throw new Error('Failed to fetch posts: ' + response.statusText);
        }

        // Parse the JSON data
        const postData = await response.json();

        // Extract posts count
        const postCount = postData.length || 0;

        // Update the HTML elements with the data
        document.getElementById('count').innerHTML = <h2>Count ${postCount}</h2>;

        // Get the details div
        const detailsDiv = document.getElementById('details');
        detailsDiv.innerHTML = ''; // Clear previous posts

        // Iterate over the postData and create HTML elements for each item
        postData.forEach(postItem => {
            const postElement = document.createElement('div');
            postElement.className = 'post-item';
            postElement.innerHTML = `
                <h3>${postItem.title}</h3>
                <p><strong>Channel:</strong> ${postItem.channel_name}</p>
                <p><strong>User:</strong> ${postItem.user_name}</p>
                <p>${postItem.comment}</p>
            `;
            detailsDiv.appendChild(postElement);
        });
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Fetch groups when the page loads
fetchGroups();