<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('family_name', 128);
            $table->string('given_name', 128);
            $table->bigInteger('classroom')->nullable();
            $table->boolean('enrolled')->default(true);
            $table->bigInteger('created_by');
            $table->bigInteger('updated_by')->nullable();
            $table->timestamps();

            $table->foreign('classroom')->references('id')->on('classrooms')->noActionOnUpdate()->restrictOnDelete();
            $table->foreign('created_by')->references('id')->on('users')->noActionOnUpdate()->restrictOnDelete();
            $table->foreign('updated_by')->references('id')->on('users')->noActionOnUpdate()->restrictOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
