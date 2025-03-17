# Step-by-Step Instructions for Testing Locally on macOS

This guide will help beginners test the personal website locally on macOS.

## Prerequisites

Before starting, make sure you have:
- A Mac computer running macOS
- Internet access for loading external resources
- Basic knowledge of using the Terminal app

## Step 1: Navigate to the Project Folder

1. Open the Terminal app (you can find it in Applications > Utilities > Terminal)
2. Navigate to your project folder using the `cd` command:
   ```
   cd "/Users/CMelchert/personal site"
   ```

## Step 2: Start a Local Web Server

You have two options for running a local server:

### Option 1: Using Python (built into macOS)

1. In Terminal, enter this command:
   ```
   python -m http.server
   ```
   (If that doesn't work, try `python3 -m http.server`)

2. You should see a message like:
   ```
   Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
   ```

### Option 2: Using VS Code Live Server (if you have VS Code installed)

1. Open the project folder in VS Code
2. Install the "Live Server" extension if you don't have it:
   - Click the Extensions icon in the sidebar (or press Cmd+Shift+X)
   - Search for "Live Server"
   - Click Install on the extension by Ritwick Dey
3. Open index.html in VS Code
4. Click the "Go Live" button at the bottom-right of the VS Code window

## Step 3: View Your Website

1. Open your web browser (Safari, Chrome, etc.)
2. In the address bar, enter:
   ```
   http://localhost:8000
   ```
3. Your website should now load in the browser

## Step 4: Testing Different Devices and Screen Sizes

To test how your site looks on different devices:

1. In Chrome or Safari, right-click on the page and select "Inspect Element" or "Inspect"
2. Click the "Toggle device toolbar" icon (looks like a phone and tablet) or press Cmd+Shift+M
3. Select different device presets from the dropdown at the top of the page

## Step 5: Testing the Features

### Testing Scroll Behavior
1. When you first load the page, you should see only the video background with alternating rows scrolling left and right
2. Scroll down a bit (approximately 100px) to see the content card appear with a smooth fade-in animation
3. Scroll back to the top to see the content card disappear

### Testing Video Carousel
1. Observe how each row of videos moves in alternating directions (left-to-right and right-to-left)
2. The videos will continue scrolling infinitely without interruption
3. All 31 videos should be displayed randomly across the rows
4. If you resize your browser window, the grid should adapt automatically

### Testing Dynamic Links
1. The content card should display your name "Clark Melchert" and tagline
2. Social links for LinkedIn and Email should be visible
3. Clicking the Email link should open your default email client
4. The "My Links" section should load content from the links.md file
5. Each link should have a hover effect and open in a new tab when clicked
6. If you modify links.md, refresh the page to see the changes
7. There is an invisible link in the top right corner of the Connect section (for those who know where to look)

### Making Changes
1. Edit the HTML, CSS, or JavaScript files using a text editor or VS Code
2. Save your changes
3. Refresh the browser to see the updates

## Step 6: Stopping the Server

When you're done testing:

1. Go back to Terminal
2. Press Ctrl+C to stop the server
3. You should see the command prompt return

## Troubleshooting

- **Page not loading**: Make sure you started the server in the correct directory
- **Changes not appearing**: Try a hard refresh (Cmd+Shift+R)
- **Videos not playing**: Check for console errors in the browser's developer tools (F12 or right-click > Inspect)
- **Styling issues**: Verify that your CSS path is correct in the HTML

## Next Steps

Once you've tested locally and are satisfied with the site, you can deploy it to GitHub Pages using the instructions in the README.md file.