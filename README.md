# Personal Website with Dynamic Video Background

This project is a personal website featuring a dynamic, visually engaging background composed of videos, along with foreground content designed for a blog, external links, and archived writings.

## Features

- **Dynamic Video Background**: 
  - Rows of videos with alternating scroll directions (left-to-right and right-to-left)
  - Infinite scrolling effect that continues seamlessly
  - Consistent video heights with responsive widths
  - Clean grid layout with intentional spacing between videos
  - Displays your personal video collection from the assets/videos folder
  - Ensures all videos are unique with no duplicates appearing at the same time

- **Scroll-Triggered Content Card**: 
  - Appears only when the user scrolls down
  - Disappears when the user scrolls back to the top
  - Displays your name "Clark Melchert" and personal tagline
  - Contains visible social media links to LinkedIn and Email
  - Includes a hidden X.com link that's only clickable if you know where to look

- **Dynamic Content from Markdown**:
  - Loads links and descriptions from a modifiable links.md file
  - Organizes content into sections based on markdown headings
  - Easy to update by simply editing the markdown file
  - Supports links with descriptions for all your projects and resources

- **Responsive Design**: 
  - Adapts to different screen sizes and devices
  - Recalculates video grid on window resize
  - Optimized for both desktop and mobile viewing

## Project Structure

```
personal-site/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Stylesheet for the entire site
├── js/
│   └── main.js             # JavaScript for dynamic functionality
├── assets/
│   └── videos/             # Folder containing your 31 personal videos
├── links.md                # Markdown file with your links and descriptions
├── README.md               # Project documentation
├── SETUP_INSTRUCTIONS.md   # Step-by-step guide for testing locally
└── PRD.txt                 # Original product requirements document
```

## Technologies Used

- HTML5
- CSS3 (with Flexbox and CSS Grid)
- JavaScript (Vanilla JS, no frameworks)
- GitHub Pages (for deployment)

## Customization

To customize this website for your needs:

1. Replace placeholder videos in the `initVideoBackground()` function with your own videos
2. Update the personal information in the content card
3. Add your own blog posts, links, and archive content
4. Adjust the colors and styling in `style.css` to match your preferences

## Deployment

The site is designed to be deployed to GitHub Pages. Follow these steps:

1. Push the code to a GitHub repository
2. Enable GitHub Pages in the repository settings
3. Set up your custom domain (if desired) using Namecheap or another provider