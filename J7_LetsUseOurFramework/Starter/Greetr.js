;(function(global, $) {
    var Greetr = function(fname, lname, lang) {
        return new Greetr.init(fname, lname, lang);   
    }
    
    var supportedlangs = ['ptbr', 'enus'];
    
    var greetings = {
        ptbr: 'Eae',
        enus: 'Hi'
    };
    
    var formalgreetings = {
        ptbr: 'Saudações',
        enus: 'Greetings'
    };
    
    var logMenussages = {
        ptbr: 'Logado',
        enus: 'Logged In'
    };
    
    Greetr.prototype = {
        fullName: function() {
            return this.fname + ' ' + this.lname;   
        },
        
        validate: function() {
             if (supportedlangs.indexOf(this.lang)  === -1) {
                throw "Linguagem inválida";   
             }
        },
        
        greeting: function() {
            return greetings[this.lang] + ' ' + this.fname + '!';
        },
        
        formalgreeting: function() {
            return formalgreetings[this.lang] + ', ' + this.fullName();  
        },
        
        greet: function(formal) {
            var msg;
            if (formal) {
                msg = this.formalgreeting();  
            }
            else {
                msg = this.greeting();  
            }

            if (console) {
                console.log(msg);
            }
            return this;
        },
        
        log: function() {
            if (console) {
                console.log(logMenussages[this.lang] + ': ' + this.fullName()); 
            }
            return this;
        },
                            
        setlang: function(lang) {
            this.lang = lang;
            this.validate();    
            return this;
        },
        
        HTMLgreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery não carregou';   
            }
            
            if (!selector) {
                throw 'Seletor jQuery não encontrado';   
            }

            var msg;
            if (formal) {
                msg = this.formalgreeting();   
            }
            else {
                msg = this.greeting();   
            }
            
            $(selector).html(msg);
            
            return this;
        }
        
    };
    Greetr.init = function(fname, lname, lang) {
        
        var self = this;
        self.fname = fname || '';
        self.lname = lname || '';
        self.lang = lang || 'ptbr';
        
        self.validate();
        
    }
    Greetr.init.prototype = Greetr.prototype;
    global.Greetr = global.G$ = Greetr;
}(window, jQuery));