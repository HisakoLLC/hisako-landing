import os
for drive in ["C", "D", "E", "F"]:
    recycle_bin = f"{drive}:\\$Recycle.Bin"
    if os.path.exists(recycle_bin):
        for root, dirs, files in os.walk(recycle_bin):
            for file in files:
                if file.startswith("$I"):
                    try:
                        with open(os.path.join(root, file), "rb") as f:
                            data = f.read()
                        if len(data) > 28:
                            name = data[28:].decode("utf-16le", errors="ignore").split("\x00")[0]
                            if "logo" in name.lower():
                                r_file = os.path.join(root, "$R" + file[2:])
                                print(f"Found: {name} at {r_file}")
                    except:
                        pass

