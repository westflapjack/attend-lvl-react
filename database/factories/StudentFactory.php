<?php

namespace Database\Factories;

use App\Models\Classroom;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'family_name' => fake()->lastName(),
            'given_name'  => fake()->firstName(),
            'classroom'   => random_int(1, Classroom::count()),
            'enrolled'    => true,
            'created_by'  => 1
        ];
    }
}
