var traceStyleLog = false;

function debug(resolver, msg)
{
	if (traceStyleLog){
        resolver.log.push(msg);}
}

function solveLeft(resolver)
{
	if (!(isNaN(resolver.left))){
		return resolver.left;}
	if (!(isNaN(resolver.antiRight) || isNaN(resolver.width))){
		debug(resolver,"solved left via antiRight and width as " + (resolver.antiRight - resolver.width));
		return resolver.antiRight - resolver.width;}
	if (!(isNaN(resolver.right) || isNaN(resolver.antiWidth))){
		debug(resolver,"solved left via right and antiWidth as " + (resolver.antiWidth - resolver.right));
		return  resolver.antiWidth - resolver.right;}
	if (!(isNaN(resolver.width) || isNaN(resolver.midLeft))){
		debug(resolver,"solved left via width and midLeft as " + (resolver.midLeft - resolver.width/2));
		return resolver.midLeft - resolver.width/2;}
	return NaN;
}

function solveRight(resolver)
{
	if (!(isNaN(resolver.right))){
		return resolver.right;}
	if (!(isNaN(resolver.antiLeft) || isNaN(resolver.width))){
		debug(resolver,"solved right via antiLeft and width as " + (resolver.antiLeft - resolver.width));
		return resolver.antiLeft - resolver.width;}
	if (!(isNaN(resolver.left) || isNaN(resolver.antiWidth))){
		debug(resolver,"solved right via left and antiWidth as " + (resolver.antiWidth - resolver.left));
		return  resolver.antiWidth - resolver.left;}
	if (!(isNaN(resolver.width) || isNaN(resolver.midRight))){
		debug(resolver,"solved Right via width and midRight as " + (resolver.midRight - resolver.width/2));
		return resolver.midRight - resolver.width/2;}
	return NaN;
}

function solveAntiLeft(resolver)
{
	if (!(isNaN(resolver.antiLeft))){
		return resolver.antiLeft;}
	if (!(isNaN(resolver.right) || isNaN(resolver.width))){
		debug(resolver,"solved antiLeft via right and width as " + (resolver.right + resolver.width));
		return resolver.right + resolver.width;}
	if (!(isNaN(resolver.left) || isNaN(resolver.antiWidth) || isNaN(resolver.width))){
		debug(resolver,"solved antiLeft via left, antiWidth and width as " + (resolver.antiWidth + resolver.width - resolver.left));
		return  resolver.antiWidth + resolver.width - resolver.left;}
	return NaN;
}

function solveAntiRight(resolver)
{
	if (!(isNaN(resolver.antiRight))){
		return resolver.antiRight;}
	if (!(isNaN(resolver.left) || isNaN(resolver.width))){
		debug(resolver,"solved antiRight via left and width as " + (resolver.left + resolver.width));
		return resolver.left + resolver.width;}
	if (!(isNaN(resolver.right) || isNaN(resolver.antiWidth) || isNaN(resolver.width))){
		debug(resolver,"solved antiRight via right, antiWidth and width as " + (resolver.antiWidth + resolver.width - resolver.right));
		return  resolver.antiWidth + resolver.width - resolver.right;}
	return NaN;
}

function solveWidth(resolver)
{
	if (!(isNaN(resolver.width))){
		return resolver.width;}
	if (!(isNaN(resolver.antiRight) || isNaN(resolver.left))){
		debug(resolver,"solved width via antiRight and left as " + (resolver.antiRight - resolver.left));
		return resolver.antiRight - resolver.left;}
	if (!(isNaN(resolver.antiLeft) || isNaN(resolver.right))){
		debug(resolver,"solved width via antiLeft and right as " + (resolver.antiLeft - resolver.right));
		return resolver.antiLeft - resolver.right;}
	if (!(isNaN(resolver.midLeft) || isNaN(resolver.left))){
		debug(resolver,"solved width via midLeft and left as " + (2 * (resolver.midLeft - resolver.left)));
		return 2 * (resolver.midLeft - resolver.left);}
	if (!(isNaN(resolver.midRight) || isNaN(resolver.right))){
		debug(resolver,"solved width via midRight and right as " + (2 * (resolver.midRight - resolver.right)));
		return 2 * (resolver.midRight - resolver.right);}
	return NaN;
}

function solveAntiWidth(resolver)
{
	if (!(isNaN(resolver.antiWidth))){
		return resolver.antiWidth;}
	if (!(isNaN(resolver.right) || isNaN(resolver.left))){
		debug(resolver,"solved antiWidth via right and left as " + (resolver.right+resolver.left));
		return resolver.right+resolver.left;}
	if (!(isNaN(resolver.antiLeft) || isNaN(resolver.antiRight) || isNaN(resolver.width))){
		debug(resolver,"solved antiWidth via antiLeft, antiRight and width as " + (resolver.antiLeft + resolver.antiRight - 2 * resolver.width));
		return resolver.antiLeft + resolver.antiRight - 2 * resolver.width;}
	return NaN;
}

function solveMidLeft(resolver)
{
	if (!(isNaN(resolver.midLeft))){
		return resolver.midLeft;}
	if (!(isNaN(resolver.left) || isNaN(resolver.width))){
		debug(resolver,"solved midLeft via left and width as " + (resolver.left+resolver.width/2));
		return resolver.left+resolver.width/2;}
	return NaN;
}

function solveMidRight(resolver)
{
	if (!(isNaN(resolver.midRight))){
		return resolver.midRight;}
	if (!(isNaN(resolver.right) || isNaN(resolver.width))){
		debug(resolver,"solved midRight via right and width as " + (resolver.right+resolver.width/2));
		return resolver.right+resolver.width/2;}
	return NaN;
}

function solveTop(resolver)
{
	if (!(isNaN(resolver.top))){
		return resolver.top;}
	if (!(isNaN(resolver.antiBottom) || isNaN(resolver.height))){
		debug(resolver,"solved top via antiBottom and height as " + (resolver.antiBottom - resolver.height));
		return resolver.antiBottom - resolver.height;}
	if (!(isNaN(resolver.bottom) || isNaN(resolver.antiHeight))){
		debug(resolver,"solved top via bottom and antiHeight as " + (resolver.antiHeight - resolver.bottom));
		return  resolver.antiHeight - resolver.bottom;}
	if (!(isNaN(resolver.height) || isNaN(resolver.midTop))){
		debug(resolver,"solved top via height and midTop as " + (resolver.midTop - resolver.height/2));
		return resolver.midTop - resolver.height/2;}
	return NaN;
}

function solveBottom(resolver)
{
	if (!(isNaN(resolver.bottom))){
		return resolver.bottom;}
	if (!(isNaN(resolver.antiTop) || isNaN(resolver.height))){
		debug(resolver,"solved bottom via antiTop and height as " + (resolver.antiTop - resolver.height));
		return resolver.antiTop - resolver.height;}
	if (!(isNaN(resolver.top) || isNaN(resolver.antiHeight))){
		debug(resolver,"solved bottom via antiHeight and top as " + (resolver.antiHeight - resolver.top));
		return resolver.antiHeight - resolver.top;}
	if (!(isNaN(resolver.height) || isNaN(resolver.midBottom))){
		debug(resolver,"solved bottom via height and midBottom as " + (resolver.midBottom - resolver.height/2));
		return resolver.midBottom - resolver.height/2;}
	return NaN;
}


function solveAntiTop(resolver)
{
	if (!(isNaN(resolver.antiTop))){
		return resolver.antiTop;}
	if (!(isNaN(resolver.bottom) || isNaN(resolver.height))){
		debug(resolver,"solved antiTop via bottom and height as " + (resolver.bottom + resolver.height));
		return resolver.bottom + resolver.height;}
	if (!(isNaN(resolver.top) || isNaN(resolver.antiHeight) || isNaN(resolver.height))){
		debug(resolver,"solved antiTop via top, antiHeight and height as " + (resolver.antiHeight + resolver.height - resolver.top));
		return  resolver.antiHeight + resolver.height - resolver.top;}
	return NaN;
}

function solveAntiBottom(resolver)
{
	if (!(isNaN(resolver.antiBottom))){
		return resolver.antiBottom;}
	if (!(isNaN(resolver.top) || isNaN(resolver.height))){
		debug(resolver,"solved antiBottom via top and height as " + (resolver.top + resolver.height));
		return resolver.top + resolver.height;}
	if (!(isNaN(resolver.bottom) || isNaN(resolver.antiHeight) || isNaN(resolver.height))){
		debug(resolver,"solved antiBottom via bottom, antiHeight and height as " + (resolver.antiHeight + resolver.height - resolver.bottom));
		return  resolver.antiHeight + resolver.height - resolver.bottom;}
	return NaN;
}

function solveHeight(resolver)
{
	if (!(isNaN(resolver.height))){
		return resolver.height;}
	if (!(isNaN(resolver.antiBottom) || isNaN(resolver.top))){
		debug(resolver,"solved height via antiBottom and top as " + (resolver.antiBottom - resolver.top));
		return resolver.antiBottom - resolver.top;}
	if (!(isNaN(resolver.antiTop) || isNaN(resolver.bottom))){
		debug(resolver,"solved height via antiBottom and bottom as " + (resolver.antiTop - resolver.bottom));
		return resolver.antiTop - resolver.bottom;}
	if (!(isNaN(resolver.midTop) || isNaN(resolver.top))){
		debug(resolver,"solved height via midTop and top as " + (2 * (resolver.midTop - resolver.top)));
		return 2 * (resolver.midTop - resolver.top);}
	if (!(isNaN(resolver.midBottom) || isNaN(resolver.bottom))){
		debug(resolver,"solved height via midBottom and bottom as " + (2 * (resolver.midBottom - resolver.bottom)));
		return 2 * (resolver.midBottom - resolver.bottom);}
	return NaN;
}

function solveAntiHeight(resolver)
{
	if (!(isNaN(resolver.antiHeight))){
		return resolver.antiHeight;}
	if (!(isNaN(resolver.bottom) || isNaN(resolver.top))){
		debug(resolver,"solved antiHeight via bottom and top as " + (resolver.bottom + resolver.top));
		return resolver.bottom + resolver.top;}
	if (!(isNaN(resolver.antiTop) || isNaN(resolver.antiBottom) || isNaN(resolver.height))){
		debug(resolver,"solved antiHeight via antiTop, antiBottom and height as " + (resolver.antiTop + resolver.antiBottom - 2 * resolver.height));
		return resolver.antiTop + resolver.antiBottom - 2 * resolver.height;}
	return NaN;
}

function solveMidTop(resolver)
{
	if (!(isNaN(resolver.midTop))){
		return resolver.midTop;}
	if (!(isNaN(resolver.top) || isNaN(resolver.height))){
		debug(resolver,"solved midTop via top and height as " + (resolver.top + resolver.height/2));
		return resolver.top + resolver.height/2;}
	return NaN;
}

function solveMidBottom(resolver)
{
	if (!(isNaN(resolver.midBottom))){
		return resolver.midBottom;}
	if (!(isNaN(resolver.bottom) || isNaN(resolver.height))){
		debug(resolver,"solved midBottom via bottom and height as " + (resolver.bottom + resolver.height/2));
		return resolver.bottom + resolver.height/2;}
	return NaN;
}

function solveLeftFromSpan(resolver, value)
{
	if (!(isNaN(resolver.left))){
		return resolver.left;}
	if (!(isNaN(resolver.width) || isNaN(resolver.right) || isNaN(value) )){
		debug(resolver,"solved left via width, right and span as " + (value - (resolver.width + resolver.right)));
		return value - (resolver.width + resolver.right);}
	if (!(isNaN(resolver.antiLeft) || isNaN(value))){
		debug(resolver,"solved left via antiLeft and span as " + (value - resolver.antiLeft));
		return value - resolver.antiLeft;}
	return NaN;
}

function solveRightFromSpan(resolver, value)
{
	if (!(isNaN(resolver.right))){
		return resolver.right;}
	if (!(isNaN(resolver.width) || isNaN(resolver.left) || isNaN(value) )){
		debug(resolver,"solved right via width, left and span as " + (value - (resolver.width + resolver.left)));
		return value - (resolver.width + resolver.left);}
	if (!(isNaN(resolver.antiRight) || isNaN(value))){
		debug(resolver,"solved right via antiRight and span as " + (value - resolver.antiRight));
		return value - resolver.antiRight;}
	return NaN;
}

function solveAntiLeftFromSpan(resolver, value)
{
	if (!(isNaN(resolver.antiLeft))){
		return resolver.antiLeft;}
	if (!(isNaN(resolver.left) || isNaN(value))){
		debug(resolver,"solved antiLeft via left and span as " + (value - resolver.left));
		return value - resolver.left;}
	if (!(isNaN(resolver.width) || isNaN(resolver.antiRight) || isNaN(value) )){
		debug(resolver,"solved antiLeft via width, antiright and span as " + (value - (resolver.antiRight - resolver.width)));
		return value - (resolver.antiRight - resolver.width);}
	return NaN;
}

function solveAntiRightFromSpan(resolver, value)
{
	if (!(isNaN(resolver.antiRight))){
		return resolver.antiRight;}
	if (!(isNaN(resolver.right) || isNaN(value))){
		debug(resolver,"solved antiRight via right and span as " + (value - resolver.right));
		return value - resolver.right;}
	if (!(isNaN(resolver.width) || isNaN(resolver.antiLeft) || isNaN(value) )){
		debug(resolver,"solved antiRight via width, antiLeft and span as " + (value - (resolver.antiLeft - resolver.width)));
		return value - (resolver.antiLeft - resolver.width);}
	return NaN;
}

function solveMidLeftFromSpan(resolver, value)
{
	if (!(isNaN(resolver.midLeft))){
		return resolver.midLeft;}
	if (!(isNaN(resolver.midRight) || isNaN(value))){
		debug(resolver,"solved midLeft via midRight and span as " + (value - resolver.midRight));
		return value - resolver.midRight;}
	return NaN;
}

function solveMidRightFromSpan(resolver, value)
{
	if (!(isNaN(resolver.midRight))){
		return resolver.midRight;}
	if (!(isNaN(resolver.midLeft) || isNaN(value))){
		debug(resolver,"solved midRight via midLeft and span as " + (value - resolver.midLeft));
		return value - resolver.midLeft;}
	return NaN;
}

function solveWidthFromSpan(resolver, value)
{
	if (!(isNaN(resolver.width))){
		return resolver.width;}
	if (!(isNaN(resolver.antiWidth) || isNaN(value))){
		debug(resolver,"solved width via antiwidth and span as " + (value - resolver.antiWidth));
		return value - resolver.antiWidth;}
	if (!(isNaN(resolver.left) || isNaN(resolver.right) || isNaN(value))){
		debug(resolver,"solved width via left, right and span as " + (value - (resolver.left+resolver.right)));
		return value - (resolver.left+resolver.right);}
	return NaN;
}

function solveAntiWidthFromSpan(resolver, value)
{
	if (!(isNaN(resolver.antiWidth))){
		return resolver.antiWidth;}
	if (!(isNaN(resolver.width) || isNaN(value))){
		debug(resolver,"solved antiWidth via width and span as " + (value - resolver.width));
		return value - resolver.width;}
	return NaN;
}


function solveTopFromSpan(resolver, value)
{
	if (!(isNaN(resolver.top))){
		return resolver.top;}
	if (!(isNaN(resolver.antiTop) || isNaN(value))){
		debug(resolver,"solved top via antiTop and span as " + (value - resolver.antiTop));
		return value - resolver.antiTop;}
	if (!(isNaN(resolver.height) || isNaN(resolver.bottom) || isNaN(value) )){
		debug(resolver,"solved top via height, bottom and span as " + (value - (resolver.height + resolver.bottom)));
		return value - (resolver.height + resolver.bottom);}
	return NaN;
}

function solveBottomFromSpan(resolver, value)
{
	if (!(isNaN(resolver.bottom))){
		return resolver.bottom;}
	if (!(isNaN(resolver.antiBottom) || isNaN(value))){
		debug(resolver,"solved bottom via antiBottom and span as " + (value - resolver.antiBottom));
		return value - resolver.antiBottom;}
	if (!(isNaN(resolver.height) || isNaN(resolver.top) || isNaN(value) )){
		debug(resolver,"solved bottom via height, top and span as " + (value - (resolver.height + resolver.top)));
		return value - (resolver.height + resolver.top);}
	return NaN;
}

function solveAntiTopFromSpan(resolver, value)
{
	if (!(isNaN(resolver.antiTop))){
		return resolver.antiTop;}
	if (!(isNaN(resolver.top) || isNaN(value))){
		debug(resolver,"solved antiTop via top and span as " + (value - resolver.top));
		return value - resolver.top;}
	if (!(isNaN(resolver.height) || isNaN(resolver.antiBottom) || isNaN(value) )){
		debug(resolver,"solved antiTop via height, antiBottom and span as " + (value - (resolver.antiBottom - resolver.height)));
		return value - (resolver.antiBottom - resolver.height);}
	return NaN;
}

function solveAntiBottomFromSpan(resolver, value)
{
	if (!(isNaN(resolver.antiBottom))){
		return resolver.antiBottom;}
	if (!(isNaN(resolver.bottom) || isNaN(value))){
		debug(resolver,"solved antiBottom via bottom and span as " + (value - resolver.bottom));
		return value - resolver.bottom;}
	if (!(isNaN(resolver.height) || isNaN(resolver.antiTop) || isNaN(value) )){
		debug(resolver,"solved antiBottom via height, antiTop and span as " + (value - (resolver.antiTop - resolver.height)));
		return value - (resolver.antiTop - resolver.height);}
	return NaN;
}

function solveMidTopFromSpan(resolver, value)
{
	if (!(isNaN(resolver.midTop))){
		return resolver.midTop;}
	if (!(isNaN(resolver.midBottom) || isNaN(value))){
		debug(resolver,"solved midTop via midBottom and span as " + (value - resolver.midBottom));
		return value - resolver.midBottom;}
	return NaN;
}

function solveMidBottomFromSpan(resolver, value)
{
	if (!(isNaN(resolver.midBottom))){
		return resolver.midBottom;}
	if (!(isNaN(resolver.midTop) || isNaN(value))){
		debug(resolver,"solved midBottom via midTop and span as " + (value - resolver.midTop));
		return value - resolver.midTop;}
	return NaN;
}

function solveHeightFromSpan(resolver, value)
{
	if (!(isNaN(resolver.height))){
		return resolver.height;}
	if (!(isNaN(resolver.antiHeight) || isNaN(value))){
		debug(resolver,"solved height via antiHeight and span as " + (value - resolver.antiHeight));
		return value - resolver.antiHeight;}
	if (!(isNaN(resolver.top) || isNaN(resolver.bottom) || isNaN(value))){
		debug(resolver,"solved height via top, bottom and span as " + (value - (resolver.top + resolver.bottom)));
		return value - (resolver.top + resolver.bottom);}
	return NaN;
}

function solveAntiHeightFromSpan(resolver, value)
{
	if (!(isNaN(resolver.antiHeight))){
		return resolver.antiHeight;}
	if (!(isNaN(resolver.height) || isNaN(value))){
		debug(resolver,"solved antiHeight via height and span as " + (value - resolver.height));
		return value - resolver.height;}
	if (!(isNaN(resolver.top) || isNaN(resolver.antiTop) || isNaN(value))){
		debug(resolver,"solved antiHeight via top, antiTop and span as " + (resolver.top + value - resolver.antiTop));
		return resolver.top + value - resolver.antiTop;}
	if (!(isNaN(resolver.bottom) || isNaN(resolver.antiBottom) || isNaN(value))){
		debug(resolver,"solved antiHeight from bottom, antiBottom and span as " + (resolver.bottom + value - resolver.antiBottom));
		return resolver.bottom + value - resolver.antiBottom;}
	return NaN;
}

function integrate(currentValue, newValue)
{
	if (!(isNaN(currentValue))){
		return currentValue;}
	return newValue;
}

function NaNCount(src)
{
    return isNaN(src.left)+
           isNaN(src.right)+
           isNaN(src.antiLeft)+
           isNaN(src.antiRight)+
           isNaN(src.midLeft)+
           isNaN(src.midRight)+
           isNaN(src.top)+
           isNaN(src.bottom)+
           isNaN(src.antiTop)+
           isNaN(src.antiBottom)+
           isNaN(src.midTop)+
           isNaN(src.midBottom)+
           isNaN(src.width)+
           isNaN(src.height)+
           isNaN(src.antiWidth)+
           isNaN(src.antiHeight);
}

function solveRules(solveElement, resolver, parentResolver){

    var reCommand = "let";
    var reSpecifier = "(?:anti)?(?:left|right|top|bottom|width|height))|(?:mid(?:left|right|top|bottom)";
    var reValue = '[\\d\\.\\-]+\\W?(?:px|\\%)';
    var reOperator = '[\\>\\=]*';
    var reDirection = "left|right|top|above|below|bottom|height|width";
    var reTarget = 'parent|children|#\\w+';
    var reTail = "now";
    var reRequired = '\\W?';
    var reOptional = "?"+reRequired;

    var reString =      "(-?(?:"+reCommand+"))" +     reOptional +
                        "(-?(?:"+reSpecifier+"))" +   reRequired +
                        "(?:be)" +                    reOptional +
                        "(-?(?:"+reValue+"))" +       reOptional +
                        "(-?(?:"+reOperator+"))" +    reRequired +
                        "(-?(?:"+reDirection+"))" +   reOptional +
                        "(?:of)"+                     reOptional +
                        "(-?(?:"+reTarget+"))"+       reOptional +
                        "(-?(?:"+reSpecifier+"))" +   reOptional +
                        "(-?(?:"+reTail+"))" +        reOptional;
     var element = $(solveElement);
     var aloeRe = new RegExp(reString,"i");
	

	for (var i in resolver.rules)
	{
		var rule = resolver.rules[i];
		var arr = aloeRe.exec(rule);
		
		var statement = arr[1];
		var targetField = arr[2];
		var distance = arr[3];
		var operator = arr[4];
		var direction = arr[5];
		var source = arr[6];
		var anchor = arr[7];
		var now = /now/i.test(arr[8]);
		
		if (isNaN(resolver[targetField])){
			var distanceWas = distance;
			if (/%/.test(distance))
				if (/(left|right|width)/i.test(targetField))
					distance = parseFloat(distance) * parentResolver.width / 100;
				else if (/(top|bottom|height)/i.test(targetField))
					distance = parseFloat(distance) * parentResolver.height / 100;
			distance = parseFloat(distance);
			
			if (/children/i.test(source)){
				if (element.children().hasClass(specifier)){
					var isReady = true;
					if (anchor == undefined || anchor == "")
						anchor = direction;
					element.children("."+specifier).each(function(x,evt){
						var e = $(evt);
                        if (!(e.hasClass(specifier+"Invisible"))){
						    var childResolver = getResolverFor(e);
						    var w;
							if (isNaN(childResolver[anchor])>0){
								do{ 
									do{
										w = NaNCount(childResolver);
										solveSimple(childResolver);
									} while (w != NaNCount(childResolver))
									 w = NaNCount(childResolver);
									solveComplex(childResolver,resolver);
								} while (w != NaNCount(childResolver))
							}
							isReady = isReady && !isNaN(childResolver[anchor]);
						}
					});
					if (isReady){
						var max = 0;
						element.children("."+specifier).each(function(x,evt){
                            var e = $(evt);
							if (!(e.hasClass(specifier+"Invisible"))){
							    var childResolver = getResolverFor(e);
								if (/width/i.test(anchor))
									max += parseFloat(childResolver["width"]);
								if (/height/i.test(anchor))
									max += parseFloat(childResolver["height"]);
							}
						});
						debug(resolver, targetField + " solved via: " + arr[0] + " as " + max);
						resolver[targetField] = max;
					} else {
						//putting off managed child resolution till the next pass
					}
				}else{
					var maxX = element.outerWidth(true);
					var maxY = element.outerHeight(true);
					element.children().each(function(x2,evt){
						var e = $(evt);
                        var x = parseFloat(e.position().left)+parseFloat(e.outerWidth(true));
						var y = parseFloat(e.position().top )+parseFloat(e.outerHeight(true));
					    debug(resolver, "width:" + x + " heigt:" + y);
						maxX = (x > maxX) ? x : maxX;
						maxY = (y > maxY) ? y : maxY;
					});
					
					if (targetField=="height"){
						debug(resolver, targetField + " solved via: " + arr[0] + " as " + maxY);
						resolver.height = maxY;
					}else if (targetField=="width"){
						debug(resolver,targetField + " solved via: " + arr[0] + " as " + maxX);
						resolver.width = maxX;
					}
				}
			}else if (!((!(distanceWas == undefined||distanceWas == ""))&&(distance == undefined || distance == "" || isNaN(distance)))){
				if ((direction == undefined||direction == "") && (anchor == undefined||anchor == "") && (!(distance == undefined || distance == "" || isNaN(distance)))){
					debug(resolver, targetField + " solved via: "+arr[0]+" as " + distance);
					resolver[targetField] = integrate(resolver[targetField],distance);
				}else if (!(direction == undefined||direction == "")){
					if (anchor == undefined||anchor == "")
						anchor = direction;
						
					if (targetField == anchor)
						if (distance == undefined || distance == "" || isNaN(distance)){
							debug(resolver, targetField + " solved via: "+arr[0] + " as 0 (no distance specified)");
							resolver[targetField] = integrate(resolver[targetField],0);
						}else{
							debug(resolver, targetField + " solved via: "+arr[0] + " as:"+distance);
							resolver[targetField] = integrate(resolver[targetField],distance);
						}
					else{
						if (anchor == direction)
						{
							var resolved = 0;
							if (/(left|right|width)/.test(targetField))
								resolved = parentResolver.width;
							else if (/(top|bottom|height)/.test(targetField))
								resolved = parentResolver.height;
							if (!(isNaN(resolved)))
							{
								if (distance == undefined || distance == "" || isNaN(distance)){
									debug(resolver, targetField + " solved via: "+arr[0] + " as "+resolved+" (no distance specified)");
									resolver[targetField] = integrate(resolver[targetField],resolved);
								}else{
									debug(resolver, targetField + " solved via: "+arr[0] + " as:"+distance + resolved);
									resolver[targetField] = integrate(resolver[targetField],distance + resolved);
								}
							}
						}else{
							debug(resolver, swapAnti(targetField) + " solved via: "+arr[0] + " as:"+distance);
					        resolver[swapAnti(targetField)] = integrate(resolver[swapAnti(targetField)],distance);
						}
					}
					
					if (now) {
					    var was;
						do{
							do{
								was = NaNCount(resolver);
                                solveSimple(resolver);
							} while (was != NaNCount(resolver))
							was = NaNCount(resolver);
							solveComplex(resolver,parentResolver);
						} while (was != NaNCount(resolver))
						//var heightBorderWidth = ($(element).outerHeight() - $(element).height());
						//var widthBorderWidth = ($(element).outerWidth() - $(element).width());
						if (!isNaN(resolver.top))
							element.css("top",resolver.top);
						if (!isNaN(resolver.left))
							element.css("left",resolver.left);
						if (!isNaN(resolver.width))
							element.css("width",resolver.width);
						if (!isNaN(resolver.height))
							element.css("height",resolver.height);
					}
				} else {
					//invalid rule
				}
			}else{
				//distance dependancy failed to resolve, hopefully it will on the next pass
			}
		}else{
			//don't over write values from previous rules/passes
		}
	}
}

function solveSimple(resolver){
    resolver.left = solveLeft(resolver);
    resolver.right = solveRight(resolver);  
    resolver.antiLeft = solveAntiLeft(resolver);
    resolver.antiRight = solveAntiRight(resolver);
    resolver.midLeft = solveMidLeft(resolver);
    resolver.midRight = solveMidRight(resolver);
    resolver.width = solveWidth(resolver);
    resolver.antiWidth = solveAntiWidth(resolver);

    resolver.top = solveTop(resolver);
    resolver.bottom = solveBottom(resolver);  
    resolver.antiTop = solveAntiTop(resolver);
    resolver.antiBottom = solveAntiBottom(resolver);
    resolver.midTop = solveMidTop(resolver);
    resolver.midBottom = solveMidBottom(resolver);
    resolver.height = solveHeight(resolver);
    resolver.antiHeight = solveAntiHeight(resolver);
}

function solveComplex(resolver, parentResolver){
    resolver.left = solveLeftFromSpan(resolver,parentResolver.width);
    resolver.right = solveRightFromSpan(resolver, parentResolver.width);  
    resolver.antiLeft = solveAntiLeftFromSpan(resolver, parentResolver.width);
    resolver.antiRight = solveAntiRightFromSpan(resolver, parentResolver.width);
    resolver.midLeft = solveMidLeftFromSpan(resolver, parentResolver.width);
    resolver.midRight = solveMidRightFromSpan(resolver, parentResolver.width);
    resolver.width = solveWidthFromSpan(resolver, parentResolver.width);
    resolver.antiWidth = solveAntiWidthFromSpan(resolver, parentResolver.width);

    resolver.top = solveTopFromSpan(resolver, parentResolver.height);
    resolver.bottom = solveBottomFromSpan(resolver, parentResolver.height);  
    resolver.antiTop = solveAntiTopFromSpan(resolver, parentResolver.height);
    resolver.antiBottom = solveAntiBottomFromSpan(resolver, parentResolver.height);
    resolver.midTop = solveMidTopFromSpan(resolver, parentResolver.height);
    resolver.midBottom = solveMidBottomFromSpan(resolver, parentResolver.height);
    resolver.height = solveHeightFromSpan(resolver, parentResolver.height);
    resolver.antiHeight = solveAntiHeightFromSpan(resolver, parentResolver.height);
}

function getResolverFor(resolveElement)
{
    var element = $(resolveElement);
    if (element.attr(specifier+"Id") in resolutionTree)
        return resolutionTree[element.attr(specifier+"Id")];
    
    if (isNaN(element.attr(specifier+"Id")))
        element.attr(specifier+"Id",aloeIdSeed++);
    
    if (!(element.hasClass(specifier))) {
        var resolver = {
            "id": element.attr(specifier+"Id"),
            "left": element.position().left,
            "top": element.position().top,
            "width": element.width(),
            "height": element.height(),
            "log": []
        };
        if (/body/i.test(element.tagName) || element.tagName == undefined || element.tagName == "")
            return resolver;

        var previousNaNCount;
        var parentResolver = getResolverFor(element.parent());

        do {
            do {
                previousNaNCount = NaNCount(resolver);
                solveSimple(resolver);
            } while (previousNaNCount != NaNCount(resolver))
            previousNaNCount = NaNCount(resolver);
            solveComplex(resolver, parentResolver);
        } while (previousNaNCount != NaNCount(resolver))
        return resolver;       
    }
    var rules;
    if (element.attr(specifier) == null) {
        rules = [];
    } else {
        rules = element.attr(specifier).split(",");
    }

    var rtn = {
        "id": element.attr(specifier+"Id"),
        "left": parseInt(element.attr("left")),
        "right": parseInt(element.attr("right")),
        "top": parseInt(element.attr("top")),
        "bottom": parseInt(element.attr("bottom")),
        "width": parseInt(element.attr("width")),
        "height": parseInt(element.attr("height")),
        "antiLeft": parseInt(element.attr("-left")),
        "antiRight": parseInt(element.attr("-right")),
        "antiTop": parseInt(element.attr("-top")),
        "antiBottom": parseInt(element.attr("-bottom")),
        "antiWidth": parseInt(element.attr("-width")),
        "antiHeight": parseInt(element.attr("-height")),
        "midLeft": parseInt(element.attr("midLeft")),
        "midRight": parseInt(element.attr("midRight")),
        "midTop": parseInt(element.attr("midTop")),
        "midBottom": parseInt(element.attr("midBottom")),
        "log": [],
        "rules": rules
    };
    if (element.prop('tagName').toLowerCase()=="body"){
        rtn.left = 0;
        rtn.right = 0;
        rtn.top = 0;
        rtn.bottom = 0;
        rtn.height = $(window).height();
        rtn.width = $(window).width();
    }
    resolutionTree[element.attr(specifier+"Id")] = rtn;
    return rtn;
}


function swapAnti(field)
{
    if (field.indexOf("anti")==0)
        return field.substr(4).toLowerCase();
    else
        return "anti" + field.substr(0,1).toUpperCase()+field.substr(1);
}


var specifier = "aloe";
var resolutionTree = {};
var aloeIdSeed = 0;
var aloeItems = [];
function aloeLayout(refresh){
    clearTimeout(aloeResize);
    refresh = (typeof refresh === "undefined") ? false : refresh;
    if (refresh)
        resolutionTree = {};
    if (aloeItems.length == 0)
        aloeItems = $("."+specifier)
	var myElements = jQuery.makeArray(aloeItems.filter(":visible"));

    var rootNanCount;
	var c = 0;
    var element;
    var resolver;
    do{
		for (i in myElements){
		    element = $(myElements[i]);
		    if (isNaN(element.attr(specifier+"Id")))
				element.attr(specifier+"Id",aloeIdSeed++);
		    resolver = getResolverFor(element);
		    aloeId = element.attr(specifier+"Id");
			resolutionTree[aloeId] = resolver;
			var parentResolver = getResolverFor(element.parent());

			do{
			    var previousNaNCount;
			    do{	
					do{
					    previousNaNCount = NaNCount(resolver);
					    solveRules(element, resolver, parentResolver);
					}while (previousNaNCount != NaNCount(resolver))
			        previousNaNCount = NaNCount(resolver);
			        solveSimple(resolver);
			    }while (previousNaNCount != NaNCount(resolver))
			    previousNaNCount = NaNCount(resolver);
			    solveComplex(resolver, parentResolver);
			}while (previousNaNCount != NaNCount(resolver))
		}
		rootNanCount = 0;
		for (var i in myElements){
		    element = myElements[i];
		    resolver = getResolverFor(element);
		    rootNanCount += NaNCount(resolver);
		}
	}while (c++ < 4)
	//while(rootNanCountWas != rootNanCount)

	for (i in myElements){
	    element = $(myElements[i]);
	    resolver = getResolverFor(element);
	    if (isNaN(resolver.top) ||
            isNaN(resolver.left) ||
            isNaN(resolver.width) ||
            isNaN(resolver.height)) {
		    debug(resolver, "not enough information, not setting position:absolute");
		    element.addClass('error');
		} else {
		    element.css({ position: 'absolute' });
		}

		//var heightBorderWidth = (element.outerHeight() - element.height());
		//var widthBorderWidth = (element.outerWidth() - element.width());
		if (!isNaN(resolver.top))
			element.css("top",resolver.top);
		if (!isNaN(resolver.left))
			element.css("left",resolver.left);
		if (!isNaN(resolver.width))
			element.css("width",resolver.width);
		if (!isNaN(resolver.height))
			element.css("height",resolver.height);
	}
}

$(window).load(aloeLayout);
var aloeResize;
$(window).resize(function () { aloeResize = setTimeout("aloeLayout(true);", 300);});
