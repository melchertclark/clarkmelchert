/**
 * Main JavaScript for Personal Website
 * 
 * This script handles:
 * 1. Creating the dynamic video background carousel with alternating scrolling directions
 * 2. Scroll-triggered appearance of the content card
 * 3. Responsive layout adjustments
 */

// Wait for DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the video background with alternating scrolling rows
    initVideoBackground();
    
    // Initialize scroll effects for content card visibility
    initScrollEffects();
    
    // Load dynamic links from markdown file
    loadDynamicLinks();
    
    // Set up responsive behavior
    handleResponsiveLayout();
    
    // Initialize window resize handling
    window.addEventListener('resize', function() {
        // Recreate the video background when window is resized
        recreateVideoBackground();
        handleResponsiveLayout();
    });
});

/**
 * Creates and populates the video background carousel with alternating scrolling rows
 * Each row alternates between scrolling left and right
 * Uses actual video files from the assets/videos directory
 */
function initVideoBackground() {
    const videoContainer = document.getElementById('videoBackground');
    
    // Clear any existing content
    videoContainer.innerHTML = '';
    
    // Array of all available video files (updated to reflect current files)
    const videoFiles = [
        '0CD97866-31BD-48DB-BF73-7D1C458DA08D.mp4',
        '69429489381__3D4E08FD-1615-4AA5-B870-59EA269A31CC.mp4',
        '80875756-8C9C-4BA2-803E-54F41073C25E.mp4',
        'IMG_0364.mp4',
        'IMG_0367.mp4',
        'IMG_0674.mp4',
        'IMG_0676.mp4',
        'IMG_0687.mp4',
        'IMG_0732.mp4',
        'IMG_0910.mp4',
        'IMG_0945.mp4',
        'IMG_0947.mp4',
        'IMG_1204.mp4',
        'IMG_1305.mp4',
        'IMG_1803.mp4',
        'IMG_2247.mp4',
        'IMG_3094.mp4',
        'IMG_4010.mp4',
        'IMG_4326.mp4',
        'IMG_4514.mp4',
        'IMG_4816.mp4',
        'IMG_5061.mp4',
        'RPReplay_Final1608093546.mp4',
        'RPReplay_Final1666023395.mp4',
        'RPReplay_Final1674308128.mp4',
        'RenderedVideo(1).mp4',
        'RenderedVideo.mp4',
        'VIDEO_20210918000230.mp4',
        'VIDEO_20211020155541.mp4',
        'VIDEO_20211020193521.mp4'
    ];
    
    // Calculate how many rows we need to fill the screen
    const viewportHeight = window.innerHeight;
    const rowHeight = 200; // Match the CSS height
    const rowGap = 10; // Match the CSS margin-bottom
    const totalHeight = rowHeight + rowGap;
    const numberOfRows = Math.ceil(viewportHeight / totalHeight) + 1; // Add extra row for buffer
    
    // Calculate videos per row for screen coverage (plus extra for infinite scrolling)
    const viewportWidth = window.innerWidth;
    const videoWidth = 300; // Base video width from CSS
    const videoGap = 10; // Space between videos
    const videosPerRow = Math.ceil((viewportWidth * 2) / (videoWidth + videoGap)); // Double the viewport width for seamless loop
    
    // Function to shuffle an array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        const newArray = [...array]; // Create a copy to not modify the original
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    // Main shuffled array to get unique videos across the entire carousel
    const mainShuffledVideos = shuffleArray(videoFiles);
    
    // Track used videos to ensure no duplicates appear on screen at once
    const usedVideosTracker = new Set();
    
    // Function to get a unique video that hasn't been used yet
    function getUniqueVideo(preferredIndex) {
        // If we've used all videos, reset the tracker
        if (usedVideosTracker.size >= mainShuffledVideos.length) {
            usedVideosTracker.clear();
        }
        
        // Try to get a video from the preferred index first
        const preferredVideo = mainShuffledVideos[preferredIndex % mainShuffledVideos.length];
        if (!usedVideosTracker.has(preferredVideo)) {
            usedVideosTracker.add(preferredVideo);
            return preferredVideo;
        }
        
        // If that's already used, find another unused video
        for (let i = 0; i < mainShuffledVideos.length; i++) {
            const video = mainShuffledVideos[i];
            if (!usedVideosTracker.has(video)) {
                usedVideosTracker.add(video);
                return video;
            }
        }
        
        // Fallback (should never happen given our logic, but just in case)
        return mainShuffledVideos[0];
    }
    
    // Create rows of videos with alternating scroll directions
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        // Create a row container
        const rowElement = document.createElement('div');
        rowElement.className = 'video-row';
        
        // Add scroll direction class - alternating left and right
        if (rowIndex % 2 === 0) {
            rowElement.classList.add('scroll-left');
        } else {
            rowElement.classList.add('scroll-right');
        }
        
        // Generate an array of unique videos for this row
        const rowVideos = [];
        for (let i = 0; i < videosPerRow; i++) {
            // Get a unique video for this position
            rowVideos.push(getUniqueVideo(rowIndex * videosPerRow + i));
        }
        
        // Fill each row with videos to cover viewport width (ensuring uniqueness)
        for (let videoIndex = 0; videoIndex < videosPerRow; videoIndex++) {
            // Get video file for this position
            const videoFile = rowVideos[videoIndex];
            
            // Create the video element
            const video = document.createElement('video');
            video.className = 'video-item';
            video.src = 'assets/videos/' + videoFile;
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            video.setAttribute('playsinline', ''); // For iOS support
            video.setAttribute('webkit-playsinline', ''); // For older iOS
            video.setAttribute('disablePictureInPicture', ''); // Prevent PiP
            video.setAttribute('disableRemotePlayback', ''); // Prevent casting
            
            // Add loading="lazy" for videos outside initial viewport
            if (rowIndex > 2) {
                video.setAttribute('loading', 'lazy');
            }
            
            // Add to the row
            rowElement.appendChild(video);
        }
        
        // Create a duplicate set of the same videos for seamless looping
        // We're using the same videos to ensure the loop is seamless
        for (let videoIndex = 0; videoIndex < videosPerRow; videoIndex++) {
            // Use the same video file as the first set for seamless looping
            const videoFile = rowVideos[videoIndex];
            
            // Create the video element (duplicate)
            const videoClone = document.createElement('video');
            videoClone.className = 'video-item';
            videoClone.src = 'assets/videos/' + videoFile;
            videoClone.autoplay = true;
            videoClone.loop = true;
            videoClone.muted = true;
            videoClone.playsInline = true;
            videoClone.setAttribute('playsinline', ''); // For iOS support
            videoClone.setAttribute('webkit-playsinline', ''); // For older iOS
            videoClone.setAttribute('disablePictureInPicture', ''); // Prevent PiP
            videoClone.setAttribute('disableRemotePlayback', ''); // Prevent casting
            videoClone.setAttribute('loading', 'lazy'); // Lazy load duplicates
            
            // Add to the row
            rowElement.appendChild(videoClone);
        }
        
        // Add the complete row to the container
        videoContainer.appendChild(rowElement);
    }
}

/**
 * Function to recreate the video background (used on window resize)
 */
function recreateVideoBackground() {
    // Remove existing background and create a new one based on new window size
    initVideoBackground();
}

/**
 * Initializes scroll-triggered animations and effects
 * The content card appears only when user scrolls down and disappears when back at top
 */
function initScrollEffects() {
    const contentCard = document.getElementById('contentCard');
    
    // Initially hide the content card until scroll
    contentCard.classList.remove('visible');
    
    // Set up scroll listener
    window.addEventListener('scroll', function() {
        // Get scroll position
        const scrollPos = window.scrollY;
        const scrollThreshold = 100; // When to show/hide the card
        
        // Show content card when scrolled down
        if (scrollPos > scrollThreshold) {
            contentCard.classList.add('visible');
        } else {
            // Hide content card when at top
            contentCard.classList.remove('visible');
        }
    });
    
    // Trigger the scroll handler on page load to set initial state
    setTimeout(function() {
        // Fake a scroll event to set initial visibility
        window.dispatchEvent(new Event('scroll'));
    }, 100);
}

/**
 * Handles responsive layout adjustments
 * Called on load and window resize
 */
function handleResponsiveLayout() {
    const contentCard = document.getElementById('contentCard');
    
    // Adjust content card positioning based on screen size
    if (window.innerWidth < 768) {
        contentCard.style.width = '95%';
        contentCard.style.margin = '15vh auto';
    } else {
        contentCard.style.width = '90%';
        contentCard.style.margin = '20vh auto';
    }
}

/**
 * Loads and parses the links.md file to populate the dynamic links section
 * Creates formatted HTML with sections, links, and descriptions
 */
function loadDynamicLinks() {
    const linksContainer = document.getElementById('dynamicLinks');
    
    // Fetch the markdown file
    fetch('links.md')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load links.md file');
            }
            return response.text();
        })
        .then(markdown => {
            // Parse the markdown content
            const html = parseMarkdownToHTML(markdown);
            
            // Update the container with the parsed content
            linksContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading links:', error);
            linksContainer.innerHTML = `
                <p class="error-message">
                    Could not load links. Please check that links.md exists.
                </p>
            `;
        });
}

/**
 * Parses markdown content into HTML for the dynamic links section
 * Supports # for title, ## for sections, and - for list items with links
 * 
 * @param {string} markdown - The markdown content to parse
 * @return {string} - The formatted HTML
 */
function parseMarkdownToHTML(markdown) {
    // Split into lines
    const lines = markdown.split('\n');
    
    let html = '';
    let currentSection = null;
    let inList = false;
    
    // Process each line
    for (const line of lines) {
        // Main title (# Title)
        if (line.startsWith('# ')) {
            // Skip the title as we already have one in the header
            continue;
        }
        // Section headings (## Section)
        else if (line.startsWith('## ')) {
            // Close previous list if open
            if (inList) {
                html += '</ul>';
                inList = false;
            }
            
            // Extract section name
            const sectionName = line.substring(3).trim();
            currentSection = sectionName;
            
            // Add section heading
            html += `<h3>${sectionName}</h3>`;
        }
        // List items (- [Link Text](URL) - Description)
        else if (line.startsWith('- ') && line.includes('[') && line.includes(']')) {
            // Start a new list if not already in one
            if (!inList) {
                html += '<ul>';
                inList = true;
            }
            
            // Extract link information
            const linkMatch = line.match(/- \[(.*?)\]\((.*?)\)(.*)$/);
            if (linkMatch) {
                const linkText = linkMatch[1];
                const linkUrl = linkMatch[2];
                let description = '';
                
                // Check if there's a description after the link
                if (linkMatch[3]) {
                    description = linkMatch[3].trim();
                    // Remove leading dash or hyphen if present
                    if (description.startsWith('-')) {
                        description = description.substring(1).trim();
                    }
                }
                
                // Add the link item
                html += `
                    <li>
                        <a href="${linkUrl}" target="_blank" rel="noopener noreferrer">${linkText}</a>
                        ${description ? `<div class="link-description">${description}</div>` : ''}
                    </li>
                `;
            }
        }
    }
    
    // Close final list if open
    if (inList) {
        html += '</ul>';
    }
    
    return html;
}