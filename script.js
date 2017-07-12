function scanLine(line){
   return line.filter(function(letter){
        return /[A-Z]/.test(letter);
    });
}
function formatLine(letters,lineLength,flag){
    var dotLength = lineLength-letters.length;
    var dots = [];
    for(var i=0;i<dotLength;i++){
        dots.push('.');
    }
    if(flag){
        return Array.prototype.concat(letters,dots);
    }else{
        return Array.prototype.concat(dots,letters);
    }
}

function getFormattedLock(lock,action){
    var newLock = [];
    if(action == "L"||action == "R"){
        newLock = lock.map(function(row){
           return formatLine(
               scanLine(row),
                row.length,
                action == "L"
           );
        });
    }else{
        for(var j=0;j<lock[0].length;j++){
            var column = [];
            for(var i=0;i<lock.length;i++){
                column.push(lock[i][j]);
            }
            var newColumn = formatLine(
               scanLine(column),
                column.length,
                action == "U"
           );
            for(var i=0;i<lock.length;i++){
            	if(!newLock[i]){
            		newLock[i]=[];
            	}
                newLock[i][j] = newColumn[i];
            }
        }
    }
    return newLock;
}
function secretArchivesLock(lock, actions) {
    var newLock = lock.map(function(line){return line.split('')});
    for(var index in actions){
        newLock = getFormattedLock(newLock,actions[index]);
    }
    return newLock.map(function(row){return row.join('');});
}
