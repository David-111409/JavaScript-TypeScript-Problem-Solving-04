class SafeConfig {
  protected _settings = {
    theme: "dark",
    language: "en",
    notifications: true,
    fontSize: 14,
  };

  getSetting(value: keyof typeof this._settings) {
    return this._settings[value];
  }

  updateSetting<T extends keyof typeof this._settings>(
    setting: T,
    newValue: (typeof this._settings)[T]
  ) {
    this._settings[setting] = newValue;
  }
}

// const config: SafeConfig = new SafeConfig();

// console.log(config.getSetting("theme")); // Expected: "dark"
// console.log(config.getSetting("fontSize")); // Expected: 14

// config.getSetting("hello")

const config = new SafeConfig();

// config.updateSetting("theme", "light"); // ✅ Should work
// config.updateSetting("fontSize", 20); // ✅ Should workc

// console.log(config.getSetting("theme"));
// console.log(config.getSetting("fontSize"));

// // @ts-expect-error
// config.updateSetting("fontSize", "huge");

class AdminConfig extends SafeConfig {
  //   getKeys<T extends keyof typeof this._settings>(): T[] {
  //     return Object.keys(this._settings) as T[];
  //   }
  getKeys(): (keyof typeof this._settings)[] {
    return Object.keys(this._settings) as (keyof typeof this._settings)[];
  }
}

const admin = new AdminConfig();
const keys = admin.getKeys();
console.log(keys);
// 'keys' should be typed as ('theme' | 'language' | 'notifications' | 'fontSize')[]
