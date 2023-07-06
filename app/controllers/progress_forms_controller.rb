class ProgressFormsController < ApplicationController
    def create
        progress_form = ProgressForm.create(tracking_params)
        if progress_form.valid?
          #session[:user_id] = user.id
          render json: progress_form, status: :created
        else
          render json: { errors: progress_form.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def tracking_params
        params.permit(:patient_id, :name, :progress)
    end

end

class ProgressFormsController < ApplicationController
    def show
      progress_form = ProgressForm.find(params[:id])
      render json: progress_form
    rescue ActiveRecord::RecordNotFound
      render json: { error: "Progress form not found" }, status: :not_found
    end
  end