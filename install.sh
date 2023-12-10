for d in **/; do if [[ -f "$d/package.json" ]]; then (cd "$d" && npm ci); fi; done
for d in **/**; do if [[ -f "$d/package.json" ]]; then (cd "$d" && npm ci); fi; done