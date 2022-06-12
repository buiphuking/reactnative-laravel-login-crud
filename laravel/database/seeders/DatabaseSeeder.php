<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
           DB::table('users')->insert([
            'mssv' => 'admin',
            'hoten' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('buiphuking@gmail.com'),
            'level' => 4,
        ]);
    }
}
