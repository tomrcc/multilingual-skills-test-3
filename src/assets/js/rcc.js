// Bundled entry for the Rosey CloudCannon Connector client. Eleventy doesn't
// bundle inline template scripts, so a bare `import("rosey-cloudcannon-connector")`
// can't resolve in the browser. esbuild bundles this to /assets/js/rcc.js, which
// the layout imports (in-editor only). The connector self-initializes on import.
import "rosey-cloudcannon-connector";
