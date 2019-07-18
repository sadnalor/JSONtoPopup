class CreatePopupFromJSON {
    constructor(targetDiv, data, headerWidths, rowsPerPage, paginationMaxButtons, title, dropdownValues) {
        this.exampleData = this.generate_example_data();
        this.white = "#ffffff";
        this.black = "#000000";
        this.blue = "#11A0DB";
        this.blueHover = "#0F90C5";
        this.red = "#ff4a09";
        this.redHover = "#e64308";
        this.grey = "#666666";
        this.translucentBlack = "rgba(0, 0, 0, 0.8)";
        this.paginationMaxButtons = paginationMaxButtons;
        this.targetDiv = targetDiv;
        this.uuid = this.generate_UUID();
        this.containerId = "popup-container";
        this.containerStyle = {
            "width": "100%",
            "height": "100%",
            "background": this.translucentBlack,
            "border-radius": "10px",
            "font-family": '"Helvetica Neue",Helvetica,Arial,sans-serif',
            "padding": "0px 10px 10px 10px"
        };
        this.titleBarId = "popup-title-bar";
        this.titleBarStyle = {
            "width": "100%",
            "color": this.white,
            "padding": "5px",
            "text-align": "center",
            "box-sizing": "border-box",
            "border-radius": "10px 10px 0px 0px",
            "font-size": "26px",
            "font-weight": "900"
        };
        this.title = title;
        this.toolbarId = "popup-toolbar";
        this.toolbarStyle = {
            "width": "100%",
            "color": this.white,
            "padding": "5px",
            "box-sizing": "border-box"
        };
        this.searchFormId = "popup-search-form";
        this.searchInputId = "popup-search-input";
        this.searchSuggestion = "Search...";
        this.formStyle = {
            "float": "right",
            "width": "30%"
        };
        this.inputStyle = {
            "box-sizing": "border-box",
            "width": "100%",
            "border": "3px solid #474747",
            "padding": "15px",
            "height": "20px",
            "border-radius": "5px",
            "outline": "none",
            "color": "#474747",
            "hoverOn": {
                "border": "3px solid #272727"
            },
            "hoverOff": {
                "border": "3px solid #474747"
            }
        };
        this.dropdownValues = dropdownValues;
        this.selectorDivId = "popup-selector-div";
        this.selectorDivStyle = {
            "float": "left",
            "width": "50%"
        }
        this.selectorLabelId = "popup-selector-label";
        this.selectorLabelStyle = {
            "color": "white",
            "float": "left",
            "padding": "5px",
            "font-size": "22px",
            "font-weight": "600"
        };
        this.selectorBackgroundDivId = "popup-selector-background-div";
        this.selectorBackgroundDivStyle = {
            "float": "left",
            "background-color": this.blue,
            "border-radius": "5px",
            "padding": "0px 10px 0px 10px",
            "cursor": "pointer",
            "hoverOn": {
                "background-color": this.blueHover
            },
            "hoverOff": {
                "background-color": this.blue
            }
        };
        this.selectorId = "popup-selector";
        this.selectorStyle = {
            "background": "transparent",
            "-webkit-appearance": "none",
            "outline": "0px",
            "border": "0px",
            "padding": "6px",
            "font-size": "20px",
            "color": "white",
            "font-weight": "600",
            "cursor": "pointer",
            "width": "99%",
            "margin": "0px !important"
        };
        console.log(this.selectorStyle);
        this.optionClass = "popup-selector-option";
        this.optionStyle = {
            "background": "rgba(0, 0, 0, 0.0)",
            "color": this.blue
        };       
        this.inactiveClass = "popup-inactive";
        this.inactiveStyle = {
            "background-color": this.grey,
            "color": this.black,
            "cursor": "default"
        };
        this.selectedButtonClass = "popup-selected";
        this.selectedButtonStyle = {
            "border": "1px white solid",
            "background-color": this.grey,
            "cursor": "default"
        };
        this.tableDivStyle = {};
        this.tableStyle = {
            "width": "100%"
        };
        this.colgroupStyle = {};
        this.colStyle = {};
        this.headerRowStyle = {
            "color": this.white
        };
        this.rowStyle = {};
        this.thStyle = {
            "cursor": "pointer",
            "color": this.white,
            "background-color": this.blue,
            "padding": "5px",
                "hoverOn": {
                    "background-color": this.blueHover
                },
                "hoverOff": {
                    "background-color": this.blue
                }
        };
        this.tdStyle = {
            "color": this.white,
            "padding": "5px"
        };
        this.evenRowStyle = {
            "hoverOn": {
                "background-color": "#383838"
            },
            "hoverOff": {
                "background-color": "transparent"
            }
        };
        this.oddRowStyle = {
            "background-color": "#222222",
            "hoverOn": {
                "background-color": "#181818"
            },
            "hoverOff": {
                "background-color": "#222222"
            }
        };
        
        this.paginationButtonStyle = {
            "border-radius": "5px",
            "color": this.white,
            "background-color": this.blue,
            "padding": "10px",
            "min-width": "30px",
            "text-align": "center",
            "margin": "5px",
            "cursor": "pointer",
            "display": "inline-block",
            "float": "right",
            "hoverOn": {
                "background-color": this.blueHover
            },
            "hoverOff": {
                "background-color": this.blue
            }
        };
        
        this.buttonsDivStyle = {
            "width": "100%",
            "color": this.white,
            "padding": "5px",
            "box-sizing": "border-box"
        };
        
        this.buttonsDivId = "buttons-div";

        this.buttonClass = "action-button";
        
        this.buttons = [
            {
                "name": "OK", 
                "id": this.buttonClass + '-' + "ok", 
                "style": {
                    "background-color": this.blue,
                    "padding": "10px",
                    "color": this.white,
                    "float": "right",
                    "font-weight": "900",
                    "font-size": "25px",
                    "border-radius": "5px",
                    "margin": "0px 10px 0px 10px",
                    "cursor": "pointer",
                    "min-width": "120px",
                    "text-align": "center",
                    "hoverOn": {
                        "background-color": this.blueHover
                    },
                    "hoverOff": {
                        "background-color": this.blue
                    }
                }, 
                "function": this.action_ok
            },
            {
                "name": "Cancel", 
                "id": this.buttonClass + '-' + "cancel", 
                "style": {
                    "background-color": this.red,
                    "padding": "10px",
                    "color": this.white,
                    "float": "right",
                    "font-weight": "900",
                    "font-size": "25px",
                    "border-radius": "5px",
                    "margin": "0px 10px 0px 10px",
                    "cursor": "pointer",
                    "min-width": "120px",
                    "text-align": "center",
                    "hoverOn": {
                        "background-color": this.redHover
                    },
                    "hoverOff": {
                        "background-color": this.red
                    }
                },
                "function": this.action_cancel
            }
        ];
        
        this.loaderId = "loader";
        this.loaderStyle = {
            "display": "none",
            "border": "4px solid #f3f3f3",
            "border-top": "4px solid " + this.blue,
            "border-radius": "50%",
            "width": "50px",
            "height": "50px",
            "z-index": "9999",
            "position": "fixed",
            "left": "50%",
            "top": "50%",
            "margin-top": "-25px",
            "margin-left": "-25px"
        };
        this.loaderSpeed = 4;
        this.showingLoader = false;
        this.tableId = "popup-table";
        this.tableDivId = "popup-table-div";
        this.colgroupId = "popup-colgroup";
        this.colClass = "popup-col"; 
        this.headerRowId = "popup-header-row";
        this.rowClass = "popup-row";
        this.thClass = "popup-table-header";
        this.tdClass = "popup-table-data";
        this.paginationDivId = "popup-pagination-div";
        this.paginationButtonClass = "popup-pagination-button";
        this.paginationButtonToFirstId = "popup-pagination-button-tofirst";
        this.paginationButtonFastPreviousId = "popup-pagination-button-fastprevious";
        this.paginationButtonPreviousId = "popup-pagination-button-previous";
        this.paginationButtonNextId = "popup-pagination-button-next";
        this.paginationButtonFastForwardId = "popup-pagination-button-fastforward";
        this.paginationButtonToLastId = "popup-pagination-button-tolast";
        
        if (data) {
            this.allData = data;
            this.allSelectedData = data;
            this.data = data;
        } else {
            this.allData = this.exampleData;
            this.allSelectedData = this.exampleData;
            this.data = this.exampleData;
        }
        
        this.firstProp;
        for (var prop in this.allData[0]) {
            this.firstProp = prop;
            break;
        }
        this.sortBy = {"colName": this.firstProp, "sort": "asc"};
        this.pageData = [];
        
        this.currentPage = 0;
        this.headers = this.get_headers();
        this.headerWidths = headerWidths;
        if (!headerWidths) {
            this.headerWidths = [];
            var width = this.calculate_header_widths(this.headers);
            for (var i in this.headers) {
                this.headerWidths.push(width);
            }
        }
        this.rowsPerPage = 15;
        if (rowsPerPage) {
            this.rowsPerPage = rowsPerPage;
        }
        this.process_new_data();
    }
    
    get_headers() {
        var headers = [];
        for (var i in this.data[0]) {
            headers.push(i);
        }
        return headers;
    }
    
    calculate_header_widths(headers) {
        var count = headers.length;
        return 100 / count;
    }
    
    generate_UUID(){
        var dt = new Date().getTime(),
            uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = (dt + Math.random()*16)%16 | 0;
                dt = Math.floor(dt/16);
                return (c=='x' ? r :(r&0x3|0x8)).toString(16);
            });
        return uuid;
    }
    
    
    
    process_new_data() {
        this.toggle_loader();
        this.sort();
        var page = [];
        this.pageData = [];
        for (var i in this.data) {
            for (var j in this.data[i]) {
                this.data[i][j]['uuid'] = this.generate_UUID();
            }
            if (page.length < this.rowsPerPage) {
                page.push(this.data[i]);
            } else {
                this.pageData.push(page);
                page = [];
                page.push(this.data[i]);
            }
        }
        this.pageData.push(page);
        this.toggle_loader();
    }
    
    process_existing_data() {
        this.toggle_loader();
        this.pageData = [];
        var page = [];
        for (var i in this.data) {
            if (page.length < this.rowsPerPage) {
                page.push(this.data[i]);
            } else {
                this.pageData.push(page);
                page = [];
                page.push(this.data[i]);
            }
        }
        this.pageData.push(page);
        this.toggle_loader();
    }
    
    style(idOrClass, styleObject) {
        var currentStyleString,
            currentStyleArray,
            alreadyStyledAttributes = [],
            id;
        $(idOrClass).each(function() {
            id = "#" + $(this).attr("id");
            currentStyleString = $(id).attr("style");
            if (currentStyleString) {
                currentStyleArray = currentStyleString.split(';');
                for (var i in currentStyleArray) {
                    alreadyStyledAttributes.push(currentStyleArray[i].split(":")[0]);
                }
            }
            for (var j in styleObject) {
                if (!alreadyStyledAttributes.includes(j)) {
                    $(id).css(j, styleObject[j]);
                }
            }
            currentStyleString = '';
            currentStyleArray = [];
            alreadyStyledAttributes = []
        });
        if (styleObject.hoverOn && styleObject.hoverOff) {
            this.hover_effect(idOrClass, styleObject.hoverOn, styleObject.hoverOff);
        }
    }
    
    hover_effect(idOrClass, styleWhenHoverOn, styleWhenHoverOff) {
        var id,
            self = this;
        $(idOrClass).hover(function() { 
            id = "#" + $(this).attr("id");
            if (!$(id).hasClass(self.inactiveClass)) {
                for (var i in styleWhenHoverOn) {
                    $(id).css(i, styleWhenHoverOn[i]);
                }
            }
        }, function() {
            id = "#" + $(this).attr("id");
            if (!$(id).hasClass(self.inactiveClass)) {
                for (var i in styleWhenHoverOff) {
                    $(id).css(i, styleWhenHoverOff[i]);
                }
            }
        });
    }
    
    add_container(containerId, containerStyle) {
        if (containerId) {
            this.containerId = containerId;
        }
        if (containerStyle) {
            this.containerStyle = containerStyle;
        }
        $(this.targetDiv).html("");
        $(this.targetDiv).append('<div id = "' + this.containerId + '"></div>');
        this.containerId = "#" + this.containerId;
        this.style(this.containerId, this.containerStyle);
    }
    
    add_title_bar(title, titleBarId, titleBarStyle) {
        if (title) {
            this.title = title;
        }
        if (titleBarId) {
            this.titleBarId = titleBarId;
        }
        if (titleBarStyle) {
            this.titleBarStyle = titleBarStyle;
        }
        $(this.containerId).append('<div id = "' + this.titleBarId + '">' + this.title + '</div>');
        this.style("#" + this.titleBarId, this.titleBarStyle);
    }

    add_toolbar(toolbarId, toolbarStyle) {
        if (toolbarId) {
            this.toolbarId = toolbarId;
        }
        if (toolbarStyle) {
            this.toolbarStyle = toolbarStyle;
        }
        $(this.containerId).append('<div id = "' + this.toolbarId + '"></div>');
        this.style("#" + this.toolbarId, this.toolbarStyle);
    }
    
    add_search(searchFormId, searchInputId, searchSuggestion, formStyle, inputStyle) {
        if (searchFormId) {
            this.searchFormId = searchFormId;
        }
        if (searchInputId) {
            this.searchInputId = searchInputId;
        }
        if (searchSuggestion) {
            this.searchSuggestion = searchSuggestion;
        }
        if (formStyle) {
            this.formStyle = formStyle;
        }
        if (inputStyle) {
            this.inactiveStyle = inputStyle;
        }
        $("#" + this.toolbarId).append('<form id = "' + this.searchFormId + '" autocomplete = "off"><input id = "' + this.searchInputId + '" type = "text" spellcheck="false" autocomplete = "off" autocomplete = "false" placeholder="' + this.searchSuggestion + '"></input></form><div style = "clear:both;"></div>');
        this.style("#" + this.searchFormId, this.formStyle);
        this.style("#" + this.searchInputId, this.inputStyle);
    }  
    
    add_type_selector(dropdownValues, selectorDivId, selectorLabelId, selectorId, selectorBackgroundDivId, optionClass, selectorDivStyle, selectorLabelStyle, selectorStyle, selectorBackgroundDivStyle, optionStyle) {
        if (dropdownValues) {
            this.dropdownValues = dropdownValues;
        }
        if (selectorDivId) {
            this.selectorDivId = selectorDivId;
        }
        if (selectorLabelId) {
            this.selectorLabelId = selectorLabelId;
        }
        if (selectorId) {
            this.selectorId = selectorId;
        }
        if (selectorBackgroundDivId) {
            this.selectorBackgroundDivId = selectorBackgroundDivId;
        }
        if (optionClass) {
            this.optionClass = optionClass;
        }
        if (selectorDivStyle) {
            this.selectorDivStyle = selectorDivStyle;
        }
        if (selectorLabelStyle) {
            this.selectorLabelStyle = selectorLabelStyle;
        }
        if (selectorStyle) {
            this.selectorStyle = selectorStyle;
        }
        if (selectorBackgroundDivStyle) {
            this.selectorBackgroundDivStyle = selectorBackgroundDivStyle;
        }
        if (optionStyle) {
            this.optionStyle = optionStyle;
        }
        var options = '';
        for (var i in this.dropdownValues) {
            options += '<option id = "' + this.optionClass + '-' + this.dropdownValues[i] + '" class = "' + this.optionClass + '" value="' + this.dropdownValues[i] + '">' + this.dropdownValues[i] + '</option>';
        }
        $("#" + this.toolbarId).append('<div id = "' + this.selectorDivId + '"><div id = "' + this.selectorLabelId + '">Show:</div><div id = "' + this.selectorBackgroundDivId + '"><select id = "' + this.selectorId + '">' + options + '</select></div></div></div>');
        this.style("#" + this.selectorDivId, this.selectorDivStyle);
        this.style("#" + this.selectorLabelId, this.selectorLabelStyle);
        this.style("#" + this.selectorBackgroundDivId, this.selectorBackgroundDivStyle);
        this.style("#" + this.selectorId, this.selectorStyle);
        this.style("." + this.optionClass, this.optionStyle);   
    }
    
    add_table(tableDivId, tableId, colgroupId, colClass, headerRowId, rowClass, thClass, tdClass, tableDivStyle, tableStyle, colgroupStyle, colStyle, headerRowStyle, rowStyle, thStyle, tdStyle) {
        if (tableDivId) {
            this.tableDivId = tableDivId;
        }
        if (tableId) {
            this.tableId = tableId;
        }
        if (colgroupId) {
            this.colgroupId = colgroupId;
        }
        if (colClass) {
            this.colClass = colClass;
        }
        if (headerRowId) {
            this.headerRowId = headerRowId;
        }
        if (rowClass) {
            this.rowClass = rowClass;
        }
        if (thClass) {
            this.thClass = thClass;
        }
        if (tdClass) {
            this.tdClass = tdClass;
        }
        if (tableDivStyle) {
            this.tableDivStyle = tableDivStyle;
        }
        if (tableStyle) {
            this.tableStyle = tableStyle;
        }
        if (colgroupStyle) {
            this.colgroupStyle = colgroupStyle;
        }
        if (colStyle) {
            this.colStyle = colStyle;
        }
        if (headerRowStyle) {
            this.headerRowStyle = headerRowStyle;
        }
        if (rowStyle) {
            this.rowStyle = rowStyle;
        }
        if (thStyle) {
            this.thStyle = thStyle;
        }
        if (tdStyle) {
            this.tdStyle = tdStyle;
        }
        $(this.containerId).append('<div id = "' + this.tableDivId + '"></div>');
        this.tableDivId = "#" + this.tableDivId;
        this.style(this.tableDivId, this.tableDivStyle);
        this.open_page(this.currentPage);
    }
    
    open_page(pageNumber) {
        var colsHtml = '',
            colId,
            headersHtml = '',
            headerId,
            rowsHtml = '',
            rowId,
            tdHtml = '',
            tdId,
            page = this.pageData[pageNumber];
        for (var i in this.headers) {
            colId = this.colClass + '-' + i.toString();
            headerId = this.thClass + '-' + i.toString();
            colsHtml += '<col class = "' + this.colClass + '" id = "' + colId + '"></col>';  
            headersHtml += '<th col-name = "' + this.headers[i] + '" class = "' + this.thClass + '" id = "' + headerId + '">' + this.headers[i] + '</th>';
        }
        for (var i in page) {
            rowId = this.rowClass + '-' + i.toString();
            rowsHtml += '<tr class = "' + this.rowClass + '" id = "' + rowId + '">';
            for (var j in page[i]) {
                tdId = this.tdClass + '-' + i.toString() + '---' + j.toString().replace(" ", "--");
                tdHtml += '<td class = "' + this.tdClass + '" id = "' + tdId + '" contenteditable = "' + page[i][j].editable + '" style = "' + page[i][j].style + '" data-id = "' + page[i][j].uuid + '" spellcheck="false">' + page[i][j].value + '</td>';
            }
            rowsHtml += tdHtml + '</tr>';
            tdHtml = '';
        }
        $(this.tableDivId).html('<table id = "' + this.tableId + '"><colgroup id = "' + this.colgroupId + '">' + colsHtml + '</colgroup><tr id = "' + this.headerRowId + '">' + headersHtml + '</tr>' + rowsHtml + '</table></div>');
        for (var i in this.headerWidths) {
            this.style("#" + this.colClass + '-' + i.toString(), {"width": this.headerWidths[i].toString() + "%"});
        }
        this.style("#" + this.tableId, this.tableStyle);
        this.style("#" + this.colgroupId, this.colgroupStyle);
        this.style("." + this.colClass, this.colStyle);
        this.style("#" + this.headerRowId, this.headerRowStyle);
        this.style("." + this.rowClass, this.rowStyle);
        this.style("." + this.rowClass + ":nth-child(2n)", this.evenRowStyle);
        this.style("." + this.rowClass + ":nth-child(2n+1)", this.oddRowStyle);      
        this.style("." + this.thClass, this.thStyle);
        this.style("." + this.tdClass, this.tdStyle);
        if ($(this.tableDivId).css("min-height") === "0px") {
            var currentHeight = $(this.tableDivId).css("height");
            $(this.tableDivId).css("min-height", currentHeight);
        }
    }
    
    add_pagination_div(paginationDivId, paginationDivStyle) {
        if (!paginationDivStyle) {
            var paginationDivStyle = {
                "width": "100%",
                "color": this.white,
                "padding": "5px",
                "box-sizing": "border-box"
            };
        }
        $(this.containerId).append('<div id = "' + paginationDivId + '"></div>');
        this.paginationDivId = "#" + paginationDivId;
        this.style(this.paginationDivId, paginationDivStyle);
    }
    
    add_pagination(page) {
        var pageCount = this.pageData.length,
            hidePrevious = false,
            hideFastPrevious = false,
            hideToFirst = false,
            hideNext = false,
            hideFastForward = false,
            hideToLast = false,
            from,
            to,
            buttonCount,
            selected = false,
            disableSelected = false;
        if (pageCount >= this.paginationMaxButtons) {
            buttonCount = this.paginationMaxButtons;
        } else {
            buttonCount = pageCount;
        }
        if (buttonCount % 2 != 0) {
            from = page - ((this.paginationMaxButtons - 1) / 2);
            if (from < 0) {
                from = 0;
            }
            to = from + this.paginationMaxButtons - 1;
            if (to > pageCount - 1) {
                to = pageCount - 1;
            }
        } else {
            from = page - (this.paginationMaxButtons / 2);
            if (from < 0) {
                from = 0;
            }
            to = from + this.paginationMaxButtons - 1;
            if (to > pageCount - 1) {
                to = pageCount - 1;
            }
        }
        if (page === 0) {
            hidePrevious = true;
            hideFastPrevious = true;
            hideToFirst = true;
        } else {
            hidePrevious = false;
            hideFastPrevious = false;
            hideToFirst = false;
        }
        if (page === pageCount - 1) {
            hideNext = true;
            hideFastForward = true;
            hideToLast = true;
        } else {
            hideNext = false;
            hideFastForward = false;
            hideToLast = false;
        }
        $(this.paginationDivId).html("");
        $(this.paginationDivId).append(this.pagination_button_html(">>>", this.paginationButtonToLastId, hideToLast));
        $("#" + this.paginationButtonToLastId).attr("page-id", "to-last");
        $(this.paginationDivId).append(this.pagination_button_html(">>", this.paginationButtonFastForwardId, hideFastForward));
        $("#" + this.paginationButtonFastForwardId).attr("page-id", "fast-forward");
        $(this.paginationDivId).append(this.pagination_button_html("Next", this.paginationButtonNextId, hideNext));
        $("#" + this.paginationButtonNextId).attr("page-id", "next");
        for (var i = to; i > from - 1; i--) {
            if (i === page) {
                selected = true;
                disableSelected = true;
            }
            $(this.paginationDivId).append(this.pagination_button_html((i+1).toString(), "pagination-button-" + i.toString(), disableSelected, selected));
            $("#" + "pagination-button-" + i.toString()).attr("page-id", i);
            disableSelected = false;
            selected = false;
        }
        $(this.paginationDivId).append(this.pagination_button_html("Previous", this.paginationButtonPreviousId, hidePrevious));
        $("#" + this.paginationButtonPreviousId).attr("page-id", "previous");
        $(this.paginationDivId).append(this.pagination_button_html("<<", this.paginationButtonFastPreviousId, hideFastPrevious));
        $("#" + this.paginationButtonFastPreviousId).attr("page-id", "fast-previous");
        $(this.paginationDivId).append(this.pagination_button_html("<<<", this.paginationButtonToFirstId, hideToFirst));
        $("#" + this.paginationButtonToFirstId).attr("page-id", "to-first");
        this.style("." + this.paginationButtonClass, this.paginationButtonStyle);
        this.style('.' + this.inactiveClass, this.inactiveStyle);
        this.style('.' + this.selectedButtonClass, this.selectedButtonStyle);
        $(this.paginationDivId).append('<div style = "clear:both;"></div>');
    }
    
    pagination_button_html(number, id, inactive, selected, className, style) {
        var inactiveClass = '',
            selectedClass = '';
        if (style) {
            this.paginationButtonStyle = style;
        }
        if (className) {
            this.paginationButtonClass = className;
        }
        if (inactive) {
            inactiveClass = " " + this.inactiveClass;
        }
        if (selected) {
            selectedClass = " " + this.selectedButtonClass;
        }
        var html = '<div id = "' + id + '" class = "' + this.paginationButtonClass + inactiveClass + selectedClass + '">' + number + '</div>';
        return html;
    }
    
    add_buttons_div(buttonsDivId, buttonsDivStyle) {
        if (buttonsDivId) {
            this.buttonsDivId = buttonsDivId;
        }
        if (buttonsDivStyle) {
            this.buttonsDivStyle = buttonsDivStyle;
        }
        $(this.containerId).append('<div id = "' + this.buttonsDivId + '"></div>');
        this.style("#" + this.buttonsDivId, this.buttonsDivStyle);
    }
    
    add_buttons(buttonClass, buttons) {
        if (buttonClass) {
            this.buttonClass = buttonClass;
        }
        if (buttons) {
            this.buttons = buttons;
        }
        var buttonsHtml = '',
            self = this;
        for (var i in this.buttons.reverse()) {
            buttonsHtml += '<div class = "' + this.buttonClass + '" id = "' + this.buttons[i].id + '">' + this.buttons[i].name + '</div>';
            $(document).on('click', "#" + this.buttons[i].id, function() {
                var id = $(this).attr("id"),
                    functionName;
                for (var ii in self.buttons) {
                    if (self.buttons[ii].id === id) {
                        functionName = self.buttons[ii].function;
                    }
                }
                functionName(self);
            });
        }
        buttonsHtml += '<div style = "clear:both;"></div>';
        $("#" + this.buttonsDivId).html(buttonsHtml);
        for (var j in this.buttons) {
            this.style("#" + this.buttons[j].id, this.buttons[j].style);
        }
    }
    
    
    action_ok(self) {
        console.log('Data received:', self.allData);
        $(self.containerId).hide();
        return self.allData;        
    }
    
    action_cancel(self) {
        console.log("Operation cancelled.");
        $(self.containerId).hide();
    }
    
    sort() {
        if (this.sortBy.sort === "asc") {
            this.allSelectedData.sort(this.ascendingSort.bind(this));
            this.data.sort(this.ascendingSort.bind(this));
            this.sortBy.sort = "des";
        } else {
            this.allSelectedData.sort(this.descendingSort.bind(this));
            this.data.sort(this.descendingSort.bind(this));
            this.sortBy.sort = "asc";
        }
    }
    
    ascendingSort(a, b) {
        var colName = this.sortBy.colName;
        if ( a[colName].value < b[colName].value ){            
            return -1;
        }
        if ( a[colName].value > b[colName].value ){
            return 1;
        }
        return 0;
    }
    
    descendingSort(a, b) {
        var colName = this.sortBy.colName;
        if ( a[colName].value < b[colName].value ){
            return 1;
        }
        if ( a[colName].value > b[colName].value ){
            return -1;
        }
        return 0;
    }
    
    apply_search() {
        this.data = [];
        for (var i in this.allData) {
            for (var j in this.allData[i]) {
                if (this.allData[i][j].passedSearch && this.allData[i][j].passedTypeCheck) {
                    this.data.push(this.allData[i]);
                    break;
                }
            }
        }
        this.process_existing_data(this.data);
        this.currentPage = 0;
        this.open_page(this.currentPage);
        this.add_pagination(this.currentPage);
        this.toggle_loader();
    }
    
    
  
    toggle_loader(loaderId, loaderStyle, loaderSpeed) {
        if ($("#" + this.loaderId).length === 0) {
            if (loaderId) {
                this.loaderId = loaderId;
            }
            if (loaderStyle) {
                this.loaderStyle = loaderStyle;
            }
            if (loaderSpeed) {
                this.loaderSpeed = loaderSpeed;
            }
            $('body').append('<div id = "' + this.loaderId + '"></div>');
            this.style("#" + this.loaderId, this.loaderStyle);   
        }
        if (this.showingLoader) {
            $("#" + this.loaderId).hide();
            this.showingLoader = false;
        } else {
            $("#" + this.loaderId).show();
            this.showingLoader = true;
        }
        this.rotate_loader(1, this.loaderSpeed, 5);
    }
    
    rotate_loader(startAtDegrees, speed, refreshInterval) {
        $("#" + this.loaderId).css({ WebkitTransform: 'rotate(' + startAtDegrees + 'deg)'});   
        var self = this;
        if (this.showingLoader) {
            setTimeout(function() {
                startAtDegrees += speed;
                self.rotate_loader(startAtDegrees, speed, refreshInterval);
            }, refreshInterval);
        }
    }
    
    update_data(colName, uuid, newValue) {
        for (var i in this.allData) {
            if (this.allData[i][colName].uuid === uuid) {
                this.allData[i][colName].value = newValue;
            }
        }
    }
    
    generate_example_data() {
        var name,
            surname,
            email,
            data = [],
            type;
        for (var i = 0; i < 1000; i++) {
            i++;
            if (i % 7 === 0) {
                type = "Errors";
            } else if(i % 5 === 0) {
                type = "Updated";
            } else if(i % 3 === 0) {
                type = "New"
            } else {
                type = "n/a"
            }
            data.push({
                "First Name": {
                    "value": "First Name " + i, 
                    "style": "color:red", 
                    "editable": true,
                    "searchable": true,
                    "type": type,
                    "passedSearch": true,
                    "passedTypeCheck": true
                }, 
                "Last Name": {
                    "value": "Surname " + i, 
                    "style": "", 
                    "editable": true,
                    "type": type,
                    "passedSearch": true,
                    "searchable": true,
                    "passedTypeCheck": true
                },
                "Type": {
                    "value": type, 
                    "style": "", 
                    "editable": true,
                    "type": type,
                    "passedSearch": true,
                    "searchable": true,
                    "passedTypeCheck": true
                }
            });
            i--;
        }
        return data;
    }
    
    enable_events() {
        var self = this;
        $(document).on('click', "." + this.paginationButtonClass + ":not(." + this.inactiveClass + ")", function() {
            var pageId = $(this).attr('page-id');
                
            if (pageId === "to-first") {
                self.currentPage = 0;
            } else if (pageId === "fast-previous") {
                self.currentPage -= self.paginationMaxButtons;
                if (self.currentPage < 0) {
                    self.currentPage = 0;
                }
            } else if (pageId === "previous") {
                self.currentPage -= 1;
            } else if (pageId === "next") {
                self.currentPage += 1;
            } else if (pageId === "fast-forward") {
                self.currentPage += self.paginationMaxButtons;
                if (self.currentPage > self.pageData.length) {
                    self.currentPage = self.pageData.length - 1;
                }
            } else if (pageId === "to-last") {
                self.currentPage = self.pageData.length - 1;
            } else {
                self.currentPage = parseInt(pageId);
            }
            self.open_page(self.currentPage);
            self.add_pagination(self.currentPage);
        });
        
        $(document).on('input', "#" + this.searchInputId, function() {
            self.toggle_loader();
            var searchInString = '',
                searchFor = $("#" + self.searchInputId).val();
            for (var i in self.allData) {
                for (var j in self.allData[i]) {
                    if (self.allData[i][j].searchable) {
                        searchInString += self.allData[i][j].value.toLowerCase(); 
                    }
                }
                if (searchInString.indexOf(searchFor.toLowerCase()) >= 0) {
                    for (var k in self.allData[i]) {
                        self.allData[i][k]['passedSearch'] = true;
                    }
                } else {
                    for (var k in self.allData[i]) {
                        self.allData[i][k]['passedSearch'] = false;
                    }
                }
                searchInString = '';
            }
            self.apply_search();
        });
        
        $(document).on('click', "." + this.thClass, function() {
            self.toggle_loader();
            var colName = $(this).attr("col-name");
            self.sortBy.colName = colName;
            self.sort();
            self.process_existing_data(self.data);
            self.open_page(self.currentPage);
            self.add_pagination(self.currentPage);
            self.toggle_loader();
        });
        
        
        $(document).on('change', "#" + this.selectorId, function() {
            self.toggle_loader();
            var optionSelected = $(this).val(),
                selectedIndex = $(this).prop('selectedIndex');
            for (var i in self.allData) {
                for (var j in self.allData[i]) {
                        for (var k in self.allData[i]) {
                            if (selectedIndex === 0) {
                                self.allData[i][k]['passedTypeCheck'] = true;
                            } else {
                                if (self.allData[i][j].type === optionSelected) {
                                    self.allData[i][k]['passedTypeCheck'] = true;
                                } else {
                                    self.allData[i][k]['passedTypeCheck'] = false;
                                }
                            }
                        }
                }
            }
            self.apply_search();
        });

        $(document).on('blur', "td." + this.tdClass, function() {
            var id = $(this).attr('id'),
                uuid = $(this).attr('data-id'),
                colName = id.split('---')[1].replace("--", " "),
                dataEntered = $("#" + id).html();
            if (dataEntered) {
                self.update_data(colName, uuid, dataEntered);
            }
        });        

        $(document).on('focus', "td." + this.tdClass, function() {
            var id = $(this).attr('id'),
                uuid = $(this).attr('data-id'),
                colName = id.split('-')[4],
                dataEntered;
            $("#" + id).keypress(function(e) { 
                if (e.keyCode === 13) {
                    this.blur();
                }
                return e.which != 13; 
            });
        });
    }
    

    
    quick_build() {
        this.add_container();
        this.add_title_bar();
        this.add_toolbar();
        this.add_type_selector();
        this.add_search();
        this.add_table();
        this.add_pagination_div();
        this.add_pagination(0);
        this.add_buttons_div();
        this.add_buttons();
        this.enable_events();
    }    
}

/*
const Popup = new CreatePopupFromJSON("#target-div", false, [30, 30, 40], 20, 5, "Import from Trello to Clarizen Go", ["All", "New", "Updated", "Errors"]);
Popup.quick_build();*/