# Update all hardcoded purple/pink colors to use theme variables (Starry Night theme)

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
        
        # Replace all hardcoded purple/pink colors with theme colors
        # Gradients
        $content = $content -replace 'from-purple-600 via-pink-600 to-blue-600', 'from-primary via-secondary to-accent'
        $content = $content -replace 'from-purple-600 to-pink-600', 'from-primary to-secondary'
        $content = $content -replace 'from-purple-700 to-pink-700', 'from-primary/90 to-secondary/90'
        $content = $content -replace 'hover:from-purple-700 hover:to-pink-700', 'hover:from-primary/90 hover:to-secondary/90'
        
        # Background colors
        $content = $content -replace 'bg-purple-600/20', 'bg-primary/20'
        $content = $content -replace 'bg-purple-600/10', 'bg-primary/10'
        $content = $content -replace 'bg-purple-600', 'bg-primary'
        $content = $content -replace 'bg-pink-600/20', 'bg-secondary/20'
        $content = $content -replace 'bg-pink-600', 'bg-secondary'
        
        # Text colors
        $content = $content -replace 'text-purple-600', 'text-primary'
        $content = $content -replace 'text-pink-600', 'text-secondary'
        
        # Border colors
        $content = $content -replace 'border-purple-600', 'border-primary'
        $content = $content -replace 'border-l-purple-600', 'border-l-primary'
        $content = $content -replace 'border-pink-600', 'border-secondary'
        
        # Hover states
        $content = $content -replace 'hover:border-purple-600', 'hover:border-primary'
        $content = $content -replace 'hover:bg-purple-600/20', 'hover:bg-primary/20'
        $content = $content -replace 'hover:text-purple-600', 'hover:text-primary'
        
        # Focus states
        $content = $content -replace 'focus:border-purple-600', 'focus:border-primary'
        
        # Shadow colors
        $content = $content -replace 'shadow-purple-500/20', 'shadow-primary/20'
        $content = $content -replace 'shadow-pink-500/20', 'shadow-secondary/20'
        
        Set-Content $path -Value $content -NoNewline
        Write-Host "Updated $file"
    }
}

Write-Host ""
Write-Host "All hardcoded colors replaced with Starry Night theme variables!"
Write-Host "Primary: Purple/Indigo oklch(0.4815 0.1178 263.3758)"
Write-Host "Secondary: Yellow oklch(0.8567 0.1164 81.0092)"
Write-Host "Accent: Soft Purple oklch(0.6896 0.0714 234.0387)"
