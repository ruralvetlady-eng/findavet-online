{
  "hosting": {
    "public": ".",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "headers": [
      { "source": "**", "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ] }
    ]
  }
}
