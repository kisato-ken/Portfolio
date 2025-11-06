# Revert all green/teal colors back to purple/pink theme

$files = @(
    "components\sections\Hero.tsx",
    "components\sections\About.tsx",
    "components\sections\Skills.tsx",
    "components\sections\Experience.tsx",
    "components\sections\Projects.tsx",
    "components\sections\Contact.tsx",
    "components\layout\Navbar.tsx"
)

foreach ($file in $files) {
    $path = Join-Path $PSScriptRoot $file
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        
        # Revert all color variations back to purple/pink
        $content = $content -replace 'from-primary via-green-500 to-teal-500', 'from-purple-600 via-pink-600 to-blue-600'
        $content = $content -replace 'from-primary to-green-500', 'from-purple-600 to-pink-600'
        $content = $content -replace 'from-primary/90 to-green-600', 'from-purple-700 to-pink-700'
        $content = $content -replace 'hover:from-primary/90 hover:to-green-600', 'hover:from-purple-700 hover:to-pink-700'
        $content = $content -replace 'bg-primary', 'bg-purple-600'
        $content = $content -replace 'text-primary', 'text-purple-600'
        $content = $content -replace 'border-primary', 'border-purple-600'
        $content = $content -replace 'border-l-primary', 'border-l-purple-600'
        $content = $content -replace 'hover:border-primary', 'hover:border-purple-600'
        $content = $content -replace 'focus:border-primary', 'focus:border-purple-600'
        $content = $content -replace 'shadow-primary/20', 'shadow-purple-500/20'
        $content = $content -replace 'hover:bg-primary/20', 'hover:bg-purple-600/20'
        $content = $content -replace 'primary/10', 'purple-600/10'
        $content = $content -replace 'primary/20', 'purple-600/20'
        $content = $content -replace 'hover:text-primary', 'hover:text-purple-600'
        $content = $content -replace 'green-500/20', 'pink-600/20'
        
        Set-Content $path -Value $content -NoNewline
        Write-Host "Updated $file"
    }
}

Write-Host "Color revert complete! Purple theme restored."
