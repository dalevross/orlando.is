namespace App;

use Illuminate\Database\Eloquent\Model;

class People
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'chosenname',
    ];
}