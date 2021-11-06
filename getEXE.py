import PyInstaller.__main__

PyInstaller.__main__.run(
    [
        "main.py",
        "--onefile",
        "--noconfirm",
        "--add-data",
        "configs;configs",
        "--add-data",
        "server/templates;server/templates",
        "--add-data",
        "server/static;server/static",
        "--name",
        "WFHelper",
    ]
)
