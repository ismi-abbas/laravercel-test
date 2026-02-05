<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    /** @use HasFactory<\Database\Factories\OrdersFactory> */
    use HasFactory;

    protected $fillable = [
        'order_number',
        'customer_id',
        'delivery_date',
        'status',
        'total_amount',
    ];
}
