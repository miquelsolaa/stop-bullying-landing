const fs = require('fs');
const path = require('path');

console.log('Copying blog files...');

try {
  const sourceDir = path.join(process.cwd(), 'content', 'blog');
  const targetDir = path.join(process.cwd(), 'public', 'blog');
  
  // Create target directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  // Copy ca directory
  const caSource = path.join(sourceDir, 'ca');
  const caTarget = path.join(targetDir, 'ca');
  
  if (fs.existsSync(caSource)) {
    if (!fs.existsSync(caTarget)) {
      fs.mkdirSync(caTarget, { recursive: true });
    }
    
    const caFiles = fs.readdirSync(caSource);
    caFiles.forEach(file => {
      const sourceFile = path.join(caSource, file);
      const targetFile = path.join(caTarget, file);
      fs.copyFileSync(sourceFile, targetFile);
      console.log(`Copied: ${file} to public/blog/ca/`);
    });
  }
  
  // Copy es directory
  const esSource = path.join(sourceDir, 'es');
  const esTarget = path.join(targetDir, 'es');
  
  if (fs.existsSync(esSource)) {
    if (!fs.existsSync(esTarget)) {
      fs.mkdirSync(esTarget, { recursive: true });
    }
    
    const esFiles = fs.readdirSync(esSource);
    esFiles.forEach(file => {
      const sourceFile = path.join(esSource, file);
      const targetFile = path.join(esTarget, file);
      fs.copyFileSync(sourceFile, targetFile);
      console.log(`Copied: ${file} to public/blog/es/`);
    });
  }
  
  console.log('Blog files copied successfully!');
} catch (error) {
  console.error('Error copying blog files:', error);
  process.exit(1);
} 