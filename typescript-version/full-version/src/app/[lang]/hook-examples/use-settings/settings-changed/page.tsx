'use client'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'

// Hook Imports
import useSettings from '@core/hooks/useSettings'

const SettingsChanged = () => {
  // Hooks
  const { settings, saveSettings, isSettingsChanged, resetSettings } = useSettings()

  const handleChange = (field: keyof Settings, value: Settings[keyof Settings]) => {
    saveSettings({
      [field]: value
    })
  }

  return (
    <main className='p-4 flex-grow'>
      <div className='flex justify-between'>
        <form>
          <p>Mode:</p>
          <input
            type='radio'
            id='dark'
            name='mode'
            value='dark'
            checked={settings.mode === 'dark'}
            onChange={() => handleChange('mode', 'dark')}
          />
          <label htmlFor='dark'>Dark</label>
          <input
            type='radio'
            id='light'
            name='mode'
            value='light'
            checked={settings.mode === 'light'}
            onChange={() => handleChange('mode', 'light')}
          />
          <label htmlFor='light'>Light</label>
          <input
            type='radio'
            id='system'
            name='mode'
            value='system'
            checked={settings.mode === 'system'}
            onChange={() => handleChange('mode', 'system')}
          />
          <label htmlFor='system'>System</label>
        </form>
        <p>{isSettingsChanged && `value:${settings.mode}`}</p>
      </div>
      {isSettingsChanged && <button onClick={resetSettings}>Reset</button>}
    </main>
  )
}

export default SettingsChanged
