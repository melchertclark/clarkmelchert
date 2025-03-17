# Video Assets

This directory is where you should place your video files for the background carousel.

## Video Requirements

- Format: MP4 (H.264) and/or WebM for broader browser compatibility
- Resolution: 720p recommended (1280x720)
- Duration: 5-15 seconds per video is ideal for looping
- Orientation: Both landscape and portrait videos are supported
- File Size: Keep videos under 2MB each for optimal performance

## Example File Structure

```
videos/
├── video-1.mp4
├── video-2.mp4
├── video-3.mp4
├── video-4.mp4
└── video-5.mp4
```

## Tips for Video Preparation

1. Compress videos using a tool like HandBrake or FFmpeg
2. Remove audio tracks to reduce file size (videos will play muted anyway)
3. Consider converting to WebP or AV1 formats for modern browsers
4. For best visual effect, choose videos with similar lighting and color tones

## How to Replace Placeholder Videos

1. Add your video files to this directory
2. Open `/js/main.js` 
3. Find the `initVideoBackground()` function
4. Replace the placeholder code with the commented video element code
5. Update the video paths to match your actual file names