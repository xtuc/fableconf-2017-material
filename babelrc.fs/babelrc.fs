type Babel(plugins, presets) =
    member this.plugins = plugins
    member this.presets = presets

// FIXME: should be a default export
let main = Babel(
  plugins = [],
  presets = ["es2015", "react"]
)
