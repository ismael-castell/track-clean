/*
    Base.js, version 1.1a
    Copyright 2006-2010, Dean Edwards
    License: http://www.opensource.org/licenses/mit-license.php
*/

var Base = function() {
    // dummy
};

Base.extend = function(){};

Base.prototype = {  
    extend: function(){}
};

// initialise
Base = Base.extend({
    constructor: function(){}
}, {
    ancestor: Object,
    version: "1.1",
    
    forEach: function(){},
        
    implement: function(){},
    
    toString: function() {
        return String(this.valueOf());
    }
});
/*jshint smarttabs:true */

var FlipClock;
    
/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
    
(function(){}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
    
(function(){}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
    
(function(){}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
    
(function(){}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
    
(function(){}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
    
(function($) {
    
    "use strict";
            
    /**
     * The FlipClock Time class is used to manage all the time 
     * calculations.
     *
     * @param   object  A FlipClock.Factory object
     * @param   mixed   This is the digit used to set the clock. If an 
     *                  object is passed, 0 will be used.   
     * @param   object  An object of properties to override the default 
     */
        
    FlipClock.Time = FlipClock.Base.extend({
        
        /**
         * The time (in seconds) or a date object
         */     
         
        time: 0,
        
        /**
         * The parent FlipClock.Factory object
         */     
         
        factory: false,
        
        /**
         * The minimum number of digits the clock face must have
         */     
         
        minimumDigits: 0,

        /**
         * Constructor
         *
         * @param  object  A FlipClock.Factory object
         * @param  int     An integer use to select the correct digit
         * @param  object  An object to override the default properties  
         */
         
        constructor: function(){},

        /**
         * Convert a string or integer to an array of digits
         *
         * @param   mixed  String or Integer of digits   
         * @return  array  An array of digits 
         */
         
        convertDigitsToArray: function(){},
        
        /**
         * Get a specific digit from the time integer
         *
         * @param   int    The specific digit to select from the time    
         * @return  mixed  Returns FALSE if no digit is found, otherwise
         *                 the method returns the defined digit  
         */
         
        digit: function(){},

        /**
         * Formats any array of digits into a valid array of digits
         *
         * @param   mixed  An array of digits    
         * @return  array  An array of digits 
         */
         
        digitize: function(){},
        
        /**
         * Gets a new Date object for the current time
         *
         * @return  array  Returns a Date object
         */

        getDateObject: function(){},
        
        /**
         * Gets a digitized daily counter
         *
         * @return  object  Returns a digitized object
         */

        getDayCounter: function(){},

        /**
         * Gets number of days
         *
         * @param   bool  Should perform a modulus? If not sent, then no.
         * @return  int   Retuns a floored integer
         */
         
        getDays: function(){},
        
        /**
         * Gets an hourly breakdown
         *
         * @return  object  Returns a digitized object
         */
         
        getHourCounter: function(){},
        
        /**
         * Gets an hourly breakdown
         *
         * @return  object  Returns a digitized object
         */
         
        getHourly: function() {
            return this.getHourCounter();
        },
        
        /**
         * Gets number of hours
         *
         * @param   bool  Should perform a modulus? If not sent, then no.
         * @return  int   Retuns a floored integer
         */
         
        getHours: function(){},
        
        /**
         * Gets the twenty-four hour time
         *
         * @return  object  returns a digitized object
         */
         
        getMilitaryTime: function(){},
                
        /**
         * Gets number of minutes
         *
         * @param   bool  Should perform a modulus? If not sent, then no.
         * @return  int   Retuns a floored integer
         */
         
        getMinutes: function(){},
        
        /**
         * Gets a minute breakdown
         */
         
        getMinuteCounter: function(){},
        
        /**
         * Gets time count in seconds regardless of if targetting date or not.
         *
         * @return  int   Returns a floored integer
         */
         
        getTimeSeconds: function(){},
        
        /**
         * Gets the current twelve hour time
         *
         * @return  object  Returns a digitized object
         */
         
        getTime: function(date, showSeconds) {
            if(typeof showSeconds === "undefined") {
                showSeconds = true;
            }

            if(!date) {
                date = this.getDateObject();
            }

            //console.log(date);

            
            var hours = date.getHours();
            var merid = hours > 12 ? 'PM' : 'AM';
            var data   = [
                hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours),
                date.getMinutes()           
            ];

            if(showSeconds === true) {
                data.push(date.getSeconds());
            }

            return this.digitize(data);
        },
        
        /**
         * Gets number of seconds
         *
         * @param   bool  Should perform a modulus? If not sent, then no.
         * @return  int   Retuns a ceiled integer
         */
         
        getSeconds: function(){},

        /**
         * Gets number of weeks
         *
         * @param   bool  Should perform a modulus? If not sent, then no.
         * @return  int   Retuns a floored integer
         */
         
        getWeeks: function(){},
        
        /**
         * Removes a specific number of leading zeros from the array.
         * This method prevents you from removing too many digits, even
         * if you try.
         *
         * @param   int    Total number of digits to remove 
         * @return  array  An array of digits 
         */
         
        removeLeadingZeros: function(){},

        /**
         * Adds X second to the current time
         */

        addSeconds: function(){},

        /**
         * Adds 1 second to the current time
         */

        addSecond: function() {
            this.addSeconds(1);
        },

        /**
         * Substracts X seconds from the current time
         */

        subSeconds: function(){},

        /**
         * Substracts 1 second from the current time
         */

        subSecond: function() {
            this.subSeconds(1);
        },
        
        /**
         * Converts the object to a human readable string
         */
         
        toString: function() {
            return this.getTimeSeconds().toString();
        }
        
        /*
        getYears: function() {
            return Math.floor(this.time / 60 / 60 / 24 / 7 / 52);
        },
        
        getDecades: function() {
            return Math.floor(this.getWeeks() / 10);
        }*/
    });
    
}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
    
(function(){}(jQuery));

(function($) {

    /**
     * Daily Counter Clock Face
     *
     * This class will generate a daily counter for FlipClock.js. A
     * daily counter will track days, hours, minutes, and seconds. If
     * the number of available digits is exceeded in the count, a new
     * digit will be created.
     *
     * @param  object  The parent FlipClock.Factory object
     * @param  object  An object of properties to override the default
     */

    FlipClock.DailyCounterFace = FlipClock.Face.extend({

        showSeconds: true,

        /**
         * Constructor
         *
         * @param  object  The parent FlipClock.Factory object
         * @param  object  An object of properties to override the default
         */

        constructor: function(factory, options) {
            this.base(factory, options);
        },

        /**
         * Build the clock face
         */

        build: function(time) {
            var t = this;
            var children = this.factory.$el.find('ul');
            var offset = 0;

            time = time ? time : this.factory.time.getDayCounter(this.showSeconds);

            if(time.length > children.length) {
                $.each(time, function(i, digit) {
                    t.createList(digit);
                });
            }

            if(this.showSeconds) {
                $(this.createDivider(mecdata.seconds)).insertBefore(this.lists[this.lists.length - 2].$el);
            }
            else
            {
                offset = 2;
            }

            $(this.createDivider(mecdata.minutes)).insertBefore(this.lists[this.lists.length - 4 + offset].$el);
            $(this.createDivider(mecdata.hours)).insertBefore(this.lists[this.lists.length - 6 + offset].$el);
            $(this.createDivider(mecdata.days, true)).insertBefore(this.lists[0].$el);

            this.base();
        },

        /**
         * Flip the clock face
         */

        flip: function(){}