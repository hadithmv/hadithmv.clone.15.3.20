<#
https://storage.googleapis.com/downloads.webmproject.org/releases/webp/index.html
C:\Users\ashraaf\Downloads\libwebp-1.2.0-windows-x64\bin\cwebp.exe C:\Users\ashraaf\Downloads\libwebp-1.2.0-windows-x64\bin\img.png -o C:\Users\ashraaf\Downloads\libwebp-1.2.0-windows-x64\bin\img.webp
#>

# https://www.mindfulmodeler.com/snips/png-to-webp/

# $env:APPDATA = C:\Users\user\AppData\Roaming

# $loc = "C:\Users\hadit\Desktop\webConvert"
$loc = "$env:USERPROFILE\OneDrive\Desktop\webConvert"

# get all files in the loc directory
$images = Get-ChildItem $loc

# loop through every images
foreach ($img in $images) {
  # output file will have .webp extension instead of old extension
  $outputName = $img.DirectoryName + "\" + $img.BaseName + ".webp"

  # copy-paste the path to where you extracted the cwebp program
  # C:\Users\ashra\Downloads\libwebp... 
  # https://stackoverflow.com/questions/72802320/running-exe-file-with-environment-variable-in-path-powershell
  & $env:USERPROFILE\Downloads\libwebp-1.4.0-windows-x64\bin\cwebp.exe $img.FullName -o $outputName
}

# Use the Invoke-Item cmdlet, or its alias: ii to open a folder or file
# open the directory in windows explorer
# C:\Users\hadit\Desktop\webConvert
ii "$env:USERPROFILE\OneDrive\Desktop\webConvert"