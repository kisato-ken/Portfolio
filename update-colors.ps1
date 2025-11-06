# Update all purple/pink colors to green/teal theme

$files = @(
    "components\sections\About.tsx",
    "components\sections\Skills.tsx",
    "components\sections\Experience.tsx",
    "components\sections\Projects.tsx",
    "components\sections\Contact.tsx"
)

foreach ($file in $files) {
    $path = Join-Path $PSScriptRoot $file
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        
        # Replace all color variations
        $content = $content -replace 'from-purple-600 via-pink-600 to-blue-600', 'from-primary via-green-500 to-teal-500'
        $content = $content -replace 'from-purple-600 to-pink-600', 'from-primary to-green-500'
        $content = $content -replace 'from-purple-700 to-pink-700', 'from-primary/90 to-green-600'
        $content = $content -replace 'bg-purple-600', 'bg-primary'
        $content = $content -replace 'text-purple-600', 'text-primary'
        $content = $content -replace 'border-purple-600', 'border-primary'
        $content = $content -replace 'border-l-purple-600', 'border-l-primary'
        $content = $content -replace 'hover:border-purple-600', 'hover:border-primary'
        $content = $content -replace 'focus:border-purple-600', 'focus:border-primary'
        $content = $content -replace 'shadow-purple-500/20', 'shadow-primary/20'
        $content = $content -replace 'hover:bg-purple-600/20', 'hover:bg-primary/20'
        $content = $content -replace 'bg-purple-600/10', 'bg-primary/10'
        $content = $content -replace 'border-purple-600/20', 'border-primary/20'
        $content = $content -replace 'hover:text-purple-600', 'hover:text-primary'
        $content = $content -replace 'purple-600/20', 'primary/20'
        $content = $content -replace 'pink-600/20', 'green-500/20'
        
        Set-Content $path -Value $content -NoNewline
        Write-Host "Updated $file"
    }
}

Write-Host "Color update complete!"
