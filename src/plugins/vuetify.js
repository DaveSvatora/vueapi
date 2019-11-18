import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: { 
            dark: {
                primary: '#004466',
                secondary: '#00ccff',
                accent: '#669999',
                error: '#cc0052',
                info: '#2eb82e',
                success: '#44cc00',
                warning: '#e67300',
            },
            light: {
                primary: '#004466',
                secondary: '#00ccff',
                accent: '#669999',
                error: '#cc0052',
                info: '#2eb82e',
                success: '#44cc00',
                warning: '#e67300',
            }
        }
    },
})